from django.http import HttpResponse,HttpResponseBadRequest #HTTP请求
from django.conf.urls import url     #路由
from django.conf import settings     #设置
import sys,os  # 操作系统功能
from django.core.wsgi import get_wsgi_application #WSGI应用

from django import forms
from io import BytesIO
from PIL import Image,ImageDraw
from django.core.cache import cache
import hashlib
from django.views.decorators.http import etag
from django.core.urlresolvers import reverse
from django.shortcuts import render




class ImageFrom(forms.Form):
    height = forms.IntegerField(min_value=1,max_value=2000);
    width = forms.IntegerField(min_value=1, max_value=2000)

    
    def generate(self,image_format ='PNG'):
        height = self.cleaned_data['height']
        width = self.cleaned_data['width']
        key = '{}.{}.{}'.format(width,height,image_format)
        content = cache.get(key)
        if content is None:
            image = Image.new('RGB',(width,height))
            draw = ImageDraw.Draw(image)
            text = '{}x{}'.format(width,height)
            textwidth,textheight = draw.textsize(text)
            if textwidth < width and textheight < height:
                texttop =(height - textheight)//2
                textleft = (width - textwidth)//2
                draw.text((textleft,texttop),text,fill=(255,255,255))
            content = BytesIO()
            image.save(content,image_format)
            content.seek(0)
            cache.set(key,content,60*60)
        return content


def generate_etag(request, width, height):
    content = 'Placeholder:{0}x{1}'.format(width, height)
    return hashlib.sha1(content.encode('utf-8')).hexdigest()




def index(request):
    example = reverse('placeholder',kwargs={'width':50,'height':50})
    context = {
        'example':request.build_absolute_uri(example)
    }
    return render(request,'home.html',context)


@etag(generate_etag)
def placeholder(request,height,width):
    form = ImageFrom({'height': height, 'width': width})
    if form.is_valid():
        image = form.generate()
        
        return HttpResponse(image,content_type='image/png')
    else:
        return HttpResponse('Invaild Image Request')

urlpatterns =(
    url(r'^image/(?P<width>[0-9]+)x(?P<height>[0-9]+)/$',placeholder,name='placeholder'),
    url(r'^$',index,name='homepage'),
)
#环境设置
DEBUG = os.environ.get('DEBUG','on') == 'on'
SECRET_KEY = os.environ.get('SECRET_KEY','qm@^_rp3crhz3+4!#!l9l2m%vz52(&9dcz0=c%$o3pkea2qi6r')
BASE_DIR = os.path.dirname(__file__)
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS','localhost').split(',')
settings.configure(
    DEBUG=DEBUG,
    SECRET_KEY=SECRET_KEY,
    ALLOWED_HOSTS=ALLOWED_HOSTS,
    ROOT_URLCONF = __name__,
    MIDDLEWARE_CLASSES=(
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
    ),
    INSTALLED_APPS =(
        'django.contrib.staticfiles',
    ),
    TEMPLATES=(
        {
            'BACKEND':'django.template.backends.django.DjangoTemplates',
            'DIRS':(os.path.join(BASE_DIR,'templates'),)
        }
    ),
    STATICFILES_DIRS = (
        os.path.join(BASE_DIR,'static'),
    ),
    STATIC_URL ='/static/',
)
application = get_wsgi_application()
if __name__ =='__main__':
    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)