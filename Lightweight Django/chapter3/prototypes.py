import sys,os

from django.conf import settings
BASE_DIR=os.path.dirname(__file__)

settings.configure(
    DEBUG = True,
    SECRET_KEY='qm@^_rp3crhz3+4!#!l9l2m%vz52(&9dcz0=c%$o3pkea2qi6r',
    ROOT_URLCONF = 'sitebuilder.urls',
    MIDDLEWARE_CLASSES=(),
    INSTALLED_APPS=(
        'django.contrib.staticfiles',
        'sitebuilder',
    ),
    TEMPLATES=(
        {
            'BACKEND':'django.template.backends.django.DjangoTemplates',
            'DIRS':[],
            'APP_DIRS':True,
        },
    ),
    STATIC_URL='/static/',
    SITE_PAGES_DIRECTORY=os.path.join(BASE_DIR,'pages'),

)
if __name__ =="__main__":
    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
