from django.http import HttpResponse #HTTP请求
from django.conf.urls import url     #路由
from django.conf import settings     #设置
import sys,os  # 操作系统功能
from django.core.wsgi import get_wsgi_application #WSGI应用

def index(request):
    return HttpResponse('Hello World')

urlpatterns =(
    url(r'^$',index),
)
#环境设置
DEBUG = os.environ.get('DEBUG','on') == 'on'
SECRET_KEY = os.environ.get('SECRET_KEY','{{secret_key}}')
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
)
application = get_wsgi_application()
if __name__ =='__main__':
    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
