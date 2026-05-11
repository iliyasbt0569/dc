const style = document.createElement('style');
style.innerHTML = `
  * {
    user-select: text !important;
  }
  ::selection {
    background: transparent;
  }
`;
document.head.appendChild(style);

const highlightDisplay = document.createElement('div');
highlightDisplay.style.position = 'fixed';
highlightDisplay.style.bottom = '0';
highlightDisplay.style.left = '0';
highlightDisplay.style.width = '100%';
highlightDisplay.style.background = 'rgba(255,255,255,0.95)';
highlightDisplay.style.color = '#8a8a8a';
highlightDisplay.style.fontSize = '12px';
highlightDisplay.style.padding = '0px 10px';
highlightDisplay.style.zIndex = '9999';
highlightDisplay.style.pointerEvents = 'none';
//highlightDisplay.style.boxShadow = '0 -2px 5px rgba(0,0,0,0.1)';
//highlightDisplay.style.fontFamily = 'Arial, sans-serif';
document.body.appendChild(highlightDisplay);


const testData = `
<question> Көрсетілген жобалардың қайсысы Django жобасына жатады?
<variantright> Quora
<question> Көрсетілгендердің қайсысы пішін өрісіне жатпайды?
<variantright> FileNameField
<question> IPDB-де қай пернені басу, сіздің қай жерде екеніңізді білдіреді?
<variantright> l
<question> Django ресми түрде қай дерекқорға қолдау көрсетпейді?
<variantright> MongoDB 
<question> Django-да әзірлеу үшін дерекқордың қайсысы қолданылатынын көрсетіңіз:
<variantright> SQLite
<question> Django жобасы үшін жұмыс дерекқоры ретінде пайдалану үшін қай дерекқор ұсынылатындығын көрсетіңіз:
<variantright> PostgreSQL
<question> Төменде көрсетілгендердің қайсысы стандартты веб 2.0 мүмкіндіктері емес?
<variantright> Достар желісі
<question> Django үшін дерекқордың қайсысы әдепкі дерекқор екенін көрсетіңіз:
<variantright> SQLite
<question> Әзірлеу сервері үшін қай порт әдепкі порт екенін көрсетіңіз:
<variantright> 8000
<question> Әзірлеу сервері үшін қай порт әдепкі порт емес екенін көрсетіңіз:
<variantright> 600
<question> Барлық қосылған клиенттермен өзара әрекеттесетін және оларға қажетті деректерді беретін есептеу құралы?
<variantright> Сервер
<question> Django-да әзірлеу дерекқордың қайсысы қолданылатынын көрсетіңіз:
<variantright> SQLite
<question> Django жобасы үшін жұмыс дерекқоры ретінде пайдалану үшін дерекқордың қайсысы ұсынылатындығын көрсетіңіз:
<variantright> PostgreSQL
<question> Django-ны іске қосу үшін Python-ның ең төменгі нұсқасы қандай?
<variantright> 2.7
<question> Django-ны іске қосу үшін pip-тің ең төменгі нұсқасы қандай?
<variantright> 1.3
<question> django-admin.py командасының мақсаты қандай?
<variantright> жаңа жобаны құру
<question> Қай коллекция қайталанатын элементтерге жол бермейді?
<variantright> SET
<question> Жобаны басқару үшін стандартты жоба құрылымының қай файлы қызмет етеді?
<variantright> manage.py
<question> Жобаның стандартты құрылымының қай файлы жоба параметрлерін сақтауға қызмет етеді?
<variantright> settings.py
<question> _init_.py файлдың мақсатын көрсетіңіз:
<variantright> модуль пакеті екеніндігі жөніндегі Django нұсқаулығы
<question> urls.py файлдың мақсатын көрсетіңіз:
<variantright> URL мекенжайын көрсету
<question> manage.py файлдың мақсатын көрсетіңіз:
<variantright> жобаны басқару
<question> Төмендегі міндеттердің қайсысы жоба менеджерлерінің міндеттеріне жатпайды?
<variantright> жобаны орнату
<question> pip install командасы қандай әрекетті орындайды?
<variantright> пакетті орнату
<question> pip uninstall командасы қандай әрекетті орындайды?
<variantright> пакетті жою
<question> Төменде көрсетілген ережелердің қайсысы пакеттерді атауға жатпайды?
<variantright> таңба-сандарды пайдалану
<question> public емес әдістер мен айнымалылар үшін бірінші таңба қандай символ болуы керек?
<variantright> төменгі астын сызу
<question> Төменде көрсетілген кітапханалардың қайсысы from ... import *. конструкциясы көмегімен импортталады?
<variantright> үшінші тарап кітапханалары
<question> Басқару тақталарының қайсысы Sql сұрауларын көрсетеді?
<variantright> SqlPath
<question> Төменде көрсетілген кітапханалардың қайсысы from ... import. конструкциясы көмегімен импортталады?
<variantright> ерекше кітапханалар
<question> git init командасы қандай әрекетті орындайды:
<variantright> репозиторий жасайды
<question> git branch командасы қандай әрекетті орындайды:
<variantright> тармақтар жасайды
<question> Қос бос жол не үшін қолданылады:
<variantright> класты анықтау
<question> Бір бос жол не үшін қолданылады:
<variantright> функцияларды класс ішінде бөлу
<question> Циклды тоқтату үшін қандай оператор қолданылады?
<variantright> break
<question> Тармақты, аралық аймаққа қандай команда орналастырады?
<variantright> git commit
<question> Тармақты қай команда жасайды
<variantright> git branch
<question> Репозиторийді қай команда жасайды?
<variantright> git init
<question> Bootstrap каркасындағы бағандардың дұрыс стандартты орналасуын көрсетіңіз:
<variantright> 2-8-2
<question> Python файлдары үшін қай кеңейтім дұрыс?
<variantright> .py
<question> Python-да функцияны қалай құруға болады?
<variantright> def myFunction():
<question> id = models.AutoField(primary_key=True) жол нені анықтайды?
<variantright> өрісті автотолтыру
<question> Төменде көрсетілгендердің қайсысы модель өрісі емес?
<variantright> DateField
<question> Жоғарғы регистрдегі жолды қайтару үшін қандай әдісті қолдануға болады?
<variantright> upper()
<question> Python-да if мәлімдемесін жазуды қалай бастауға болады?
<variantright> if x>y
<question> $ символы тұрақты өрнектерде нені білдіреді?
<variantright> жолдың соңы
<question> Тұрақты тіркестерде ^ таңбасы нені білдіреді?
<variantright> жолдың басы
<question> Контейнерді толтыру мөлшерін көрсетіңіз:
<variantright> 15 px
<question> Теріс жол шегінісінің өлшемін көрсетіңіз:
<variantright> 15 px
<question> Пайдаланушының әкімші екенін сақтау үшін қандай өріс қажет?
<variantright> BooleanField
<question> Пайдаланушының әрекет күйін сақтау үшін өрістің қандай түрі қажет?
<variantright> BooleanField
<question> Пайдаланушының электрондық поштасын сақтау үшін қандай өріс қажет?
<variantright> EmailField
<question> Твитті енгізу үшін виджеттің қай түрін өріске сәйкестендіру керек?
<variantright> Hiddenlnput
<question> Көрсетілгендердің қайсысы форма өрісі емес?
<variantright> FileNameField
<question> Жасырын енгізу өрісін құру үшін, виджет түрлерінің қайсысы қолданылады?
<variantright> Hiddenlnput
<question> Пішіндер кітапханасы қандай тапсырманы өңдемейді?
<variantright> пішін скриптін орындау
<question> URL(r'^hashTag/(\w+) / $', HashTagCloud.as_view()), сілтейді?
<variantright> тегтер бұлтына
<question> Хэштег атауын сақтау үшін пішін өрісінің қандай түрі қажет?
<variantright> CharField
<question> Келесі операторлардың қайсысы ең жоғары басымдыққа ие?
<variantright> *
<question> Рекурсивті функцияға қатысты нұсқалардың қайсысы дұрыс?
<variantright> рекурсивті функция кодты жеңілдету үшін қолданылады.
<question> Төмендегі әдістердің қайсысы анимация жасау әдісі емес?
<variantright> hide()
<question> Төмендегі әдістердің қайсысы негізгі анимация жасау әдісі болып табылады?
<variantright> slideUP()
<question> Төмендегі әдістердің қайсысы элементті жасыру әдісі болып табылады?
<variantright> hide()
<question> Іздеу сұрауына дәл сәйкестік үшін қандай оператор қолданылады?
<variantright> exact
<question> Белгілі бір әріптен басталатын нәтиженің іздеу сұрауына сәйкес келу үшін қандай оператор қолданылады?
<variantright> StartsWith
<question> Егер өріс аргументтің мәнінен үлкен болса, қандай оператор қолданылады?
<variantright> gt
<question> Төменде көрсетілген технологиялардың қайсысы AJAX құрамына кірмейді?
<variantright> PHP
<question> query = forms.CharField(…) форманы қандай түрде береді?
<variantright> таңба
<question> Төменде айтылғандардың қайсысы AJAX фреймворкы емес?
<variantright> Ruby
<question> Төменде көрсетілгендердің қайсысы logging модуліне кіреді?
<variantright> өңдеушілер
<question> Төмендегі әрекеттердің қайсысы ng-model директивасына жатады?
<variantright> HTML элементтерін HTML формаларына байланыстыру
<question> ng-repeat директивасы қандай алгоритмдік конструкцияны сипаттайды?
<variantright> Цикл
<question> Төмендегі ерекшеліктердің қайсысы AngularJS-ке жатады?
<variantright> екі жақты байланыстыру
<question> ElasticSearch серверін іске қосу үшін қандай порт қажет?
<variantright> 9200
<question> Сұралған URL мекен-жайы болмаған кезде шаблондардың қайсысы пайда болады?
<variantright> 404.html
<question> Ішкі сервер қатесі пайда болған кезде шаблондардың қайсысы пайда болады?
<variantright> 500.html
<question> pem файлы үшін қандай рұқсат қажет?
<variantright> 400
<question> Қай портта SSH қосылады?
<variantright> 22
<question> HTTP қай портта жұмыс істейді?
<variantright> 80
<question> IPDB-де қай пернені басу, келесі элементке көшуді білдіреді?
<variantright> n
<question> IPDB-де қандай пернені басу, жалғастыру дегенді білдіреді?
<variantright> c
<question> Әкімші тақталарының қайсысы кэш-нысаны нәтижелерін көрсетеді?
<variantright> CachePath
<question> Басқару тақталарының қайсысы қайта бағыттау бетін көрсетеді?
<variantright> RedirectPath
<question> Басқару тақталарының қайсысы сигналдар мен олардың дәлелдері және алушылардың тізімін көрсетеді?
<variantright> SignalPath
<question> Әкімші тақталарының қайсысы негізгі ақпаратты көрсетеді?
<variantright> VersionlPath
<question> Әкімші панелінің қайсысы HTTP сұраулары мен жауаптарының тақырыптарын және WSGI ортасының айнымалыларын көрсетеді?
<variantright> Path
<question> Басқару тақталарының қайсысы фреймворктің айнымалы мәндерін көрсетеді?
<variantright> TimerPath
<question> Төменде көрсетілген кітапханалардың қайсысы import *. конструкциясы көмегімен импортталады?
<variantright> жүйелік кітапханалар
<question> Басқару тақталарының қайсысы журнал хабарламаларын көрсетеді?
<variantright> LoggingPath
<question> Python мұрагер ретінде алынған бағдарламаны көрсетіңіз?
<variantright> ABC
<question> Әкімші тақталарының қайсысы қолданылатын шаблондарды көрсетеді?
<variantright> TemplatePath
<question> Қандай коллекция реттелген, өзгертілетін және элементтердің қайталануына мүмкіндік береді?
<variantright> LIST
<question> Басқару тақталарының қайсысы қайта бағыттау бетін көрсетеді?
<variantright> RedirectPath
<question> Төменде айтылғандардың қайсысы AJAX фреймворкы емес?
<variantright> Python
<question> Logging модулі жасаған есеп файлдарын басқаруға арналған функциялардың қайсысы ең минималды үлес деңгейін білдіреді?
<variantright> info()
<question> Logging модулі жасаған төменде келтірілген есеп файлдарын басқаруға арналған функциялардың қайсысы максималды үлес деңгейін білдіреді?
<variantright> error()
<question> Logging модулі жасаған есеп файлдарының қайсысы ескерту болып табылады?
<variantright> warning_message ()
<question> Қателерді түзету кезінде Logging модулі жасаған есеп файлдарын басқаруға арналған функциялардың қайсысы қолданылады?
<variantright> debug()
<question> Logging модулі жасаған есеп файлдарын басқаруға арналған функциялардың қайсысы кейбір функциялардың орындалуын тоқтатуға болатындығын ескерту үшін қолданылады?
<variantright> warning()
<question> Қалыпты жағдайда есеп файлын құру үшін Logging модулі жасаған есеп файлдарын басқару функцияларының қайсысы қолданылады?
<variantright> info()
<question> TASTYPIE_DATETIME_FORMATTING мәнінің қайсысы стандартты емес?
<variantright> xd-2000
<question> TASTYPIE_DATETIME_FORMATTING мәнінің қайсысы стандартты емес?
<variantright> iso-8601-strict
<question> REST ішіндегі POST сұранысы не істейді?
<variantright> пайдаланушының деректерін жібереді
<question> REST сұрауын көрсетіңіз?
<variantright> GET
<question> REST сұрауларына қайсысы тән емес?
<variantright> ROLL
<question> REST ішіндегі GET сұранысы не істейді?
<variantright> пайдаланушы деректерін алады
<question> REST ішіндегі DELETE сұранысы не істейді?
<variantright> пайдаланушы жазбасын жояды
<question> Әлеуметтік аутентификация қатесі болған кезде төмендегі URL-дің қайсысы жұмыс істейді?
<variantright> social_auth_login_error_url
<question> Әлеуметтік аутентификация кезінде сәтті кірген жағдайда URL-дің қайсысы жұмыс істейді?
<variantright> social_auth_login_url
<question> TASTYPIE_DEFAULT_FORMATS-ы әдепкі келісім бойынша қай форматты қабылдайды?
<variantright> json
<question> MongoDB-де пайдаланушының электрондық поштасын сақтау үшін қандай өріс қажет?
<variantright> EmailField
<question> Төменде көрсетілгендердің қайсысы өзгермелі нүкте санын сақтайтын MongoDB моделінің өрісі болып табылады?
<variantright> DecimalField
<question> Көшу жолдарының қайсысы модельдік индекстер жиынтығын өзгертеді?
<variantright> AltelndexTogether
<question> 2015 жылдың 25 қазанына арналған humanize ішкі фреймворктың natural day сүзгісі қандай күндерді қайтарады?
<variantright> 23, 24, 25 қазан
<question> Аутентификация жүйесінің негізі болып табылатын ішкі фреймворкты көрсетіңіз?
<variantright> auth
<question> TestСase класының қай әдісі true мәнін күтеді?
<variantright> assertTrue
<question> Client () класының қай әдісі үлгіні қайтарады?
<variantright> template
<question> ng-repeat директивасы не үшін пайдаланылмайды?
<variantright> мәндерді іріктеу
<question> Индекс негізгі экземплярдың қай көшірмесінде болатындығын қандай параметр сипаттайды?
<variantright> Replicas
<question> Қандай параметр индекстің қанша экземплярды қамтитынын сипаттайды?
<variantright> Shards
<question> ElasticSearch-тің бәсекелестік артықшылығы неде?
<variantright> нақты уақыттағы деректерді толық талдау
<question> Пайдаланушы өзара әрекеттесетін көріністе пайдаланушыға көрсетілетін деректер – бұл?
<variantright> Директива
<question> Модель сақталатын контекст – бұл?
<variantright> Модель
<question> AngularJS қосымшасын анықтау үшін директивалардың қайсысы қолданылады?
<variantright> ng-app
<question> git merge командасы қандай әрекетті орындайды?
<variantright> тармақтарды біріктіреді
<question> Көшу жолдарының қайсысы қолданыстағы модельге өріс қосады?
<variantright> AddField
<question> Деректер базасының қайсысында конфликтілерді шешудің автоматты жүйесі бар?
<variantright> CouchDB
<question> 2000000 санына арналған humanize кіші фреймворк Int word сүзгісі қандай нәтиже береді?
<variantright> 2,0 млн
<question> Фреймворктардың қайсысы Django сессиясының фреймворкы болып табылады?
<variantright> sessions
<question> Testcase класының қай әдісі екі мәннің тең екенін күтеді?
<variantright> assertEqual
<question> Client () класының қай әдісі беттің жауап денесін қайтарады?
<variantright> content
<question> Client () класының қай әдісі HTTP жауап күйін қайтарады?
<variantright> status_code
<question> Деректер базасы кестесінде кэштің қандай түрі сақталады?
<variantright> деректер базасын кэштеу
<question> Параметрлердің қайсысы шақыру сілтемесін жібереді?
<variantright> link
<question> Пайдаланушыны оқитын есептегішті сақтау үшін қандай өріс қажет?
<variantright> IntegerField
<question> urls.py файлындағы url жолы (r'^search/hashTag$',SearchHashTag.as_view())) нені білдіреді?
<variantright> хэштегті іздеу бетіне сілтеме
<question> models.DateTimeField жолы қандай өріс түрін анықтайды:
<variantright> күні-уақыты
<question> python manage.py syncdb командасы не үшін қолданылады?
<variantright> жобаның дерекқорын синхрондау
<question> HTML парағындағы динамикалық элементті қай әдіс қосады?
<variantright> before()
<question> Қай әдіс HTML парағындағы динамикалық элементті жояды:
<variantright> remove()
<question> Төмендегі әдістердің қайсысы тармақты айналып өту кезінде ағымдағы таңдалған элементтің барлық мұрагерлерін қайтарады?
<variantright> children()
<question> Индекс қандай деректерден тұратынын қай параметр сипаттайды?
<variantright> Mappings
<question> Model директиваларының қайсысы HTML басқару элементтерінің мәнін AngularJS қосымшасына байланыстырады?
<variantright> ng-model 
<question> AngularJS-тің html-дегі көрінісіне қосымшалар қандай директивасы қосады?
<variantright> data.ng-bind
<question> Пайдаланушының әрекет күйін сақтау үшін өрістің қандай түрі қажет?
<variantright> BooleanField
<question> Берілген форматтардың қайсысы әдепкі бойынша TASTYPIE_DEFAULT_FORMATS қабылдамайды?
<variantright> css
<question> Әлеуметтік аутентификация сәтті болған кезде төмендегі URL мекенжайларының қайсысы жұмыс істейді?
<variantright> social_auth_login_url
<question> MongoDB-де пайдаланушы мәртебесін сақтау үшін қандай өріс қажет?
<variantright> BooleanField
<question> Төмендегі мәліметтер базасының қайсысы ресми түрде Django қолдайтын мәліметтер базасы емес?
<variantright> MongoDB
<question> Төмендегі командалардың қайсысы көшу сұрауын қайтарады?
<variantright> sqlmigrate
<question> 2015 жылдың 7 мамырына арналған humanize ішкі фреймворктың natural day сүзгісі қандай күндерді қайтарады?
<variantright> 6, 7, 8 мамыр
<question> Директивалардың қайсысы қолданба деректерін AngularJS-тегі html көрінісіне байланыстырады?
<variantright> data.ng-bind
<question> Негізгі бизнес логика түсінігі – бұл?
<variantright> Контроллер
<question> Google Application Engine-нің ерекшелігі неде?
<variantright> Сенімділік
<question> OpenShift-тің ерекшелігі неде?
<variantright> open source
<question> Google Compute Engine-нің ерекшелігі неде?
<variantright> сенімділік
<question> Жұмыс дерекқоры ретінде қай дерекқорды таңдау керек?
<variantright> Postgresql
<question> Apache серверінің конфигурация файлы параметрлерінің қайсысында wsgi.py жоба файлы сақталады?
<variantright> WSGIScriptAlias
<question> urls.py файлында {'', include('social.apps.django_app.urls', namespace='social')) url жолы нені білдіреді?
<variantright> әлеуметтік авторизация бетіне сілтеме
<question> Django үшін мәліметтер базасының қайсысы әдепкі база болып табылады?
<variantright> SQLite
<question> email = models.EmailField('email address', unique=True) жолы нені қамтиды?
<variantright> өрісте электрондық пошта мекенжайы бар
<question> Қолданыстағы дерекқорлардың қайсысы, серверлік деректер құрылымындағы артықшылыққа ие?
<variantright> Redis
<question> Қолданыстағы дерекқорлардың қайсысы ретінде динамикалық схема артықшылығына ие болады?
<variantright> MongoDB
<question> Деректер базасының қайсысы open-source болып табылады??
<variantright> MYSQL
<question> Осы командалардың қайсысы көшу сұрауын дайындайды?
<variantright> makemigrations
<question> Көшу жауаптарының қайсысы қолданыстағы модельдегі өрісті жояды?
<variantright> RemoveField
<question> Деректер базасының қайсысы кэш ретінде пайдалану ерекшелігіне ие?
<variantright> Redis
<question> Деректер базасының қайсысының кеңейтілген сұраныстарды қолдау ерекшелігіне ие?
<variantright> PostgreSql
<question> Деректер базасының қайсысында сегментация ерекшелігі бар?
<variantright> MySql
<question> Дерекқордың қайсысынында репликациялық жеңілдік ерекшелігі бар?
<variantright> CouchDB
<question> Хабарлама жіберу, деректер моделі үшін міндетті өріс болып есептеледі?
<variantright> алушы
<question> Деректер моделі үшін, хабарлама жіберу міндеттелген?
<variantright> хабарлама денесіне
<question> Ішкі фрейморктің қайсысы арна генерациясының негізі болып табылады?
<variantright> sindication
<question> if user Following.followers.filter(username=request.user.username).exists коды қандай функцияны орындайды?
<variantright> оқырман есімінің сұрау салынған есімге сәйкестігін тексеру
<question> Электрондық поштаны шақырған немесе жіберген адамның электрондық пошта мекенжайын беру параметрі?
<variantright> sender_email
<question> Кэштің қандай түрі үшін деректер процесс жадында сақталады?
<variantright> қарапайым кэштеу
<question> Кэштің қандай түрі үшін деректер сыртқы жадта сақталады?
<variantright> файлды кэштеу
<question> Gettext әдісі қандай нысандарды аудару кезінде қолданылады?
<variantright> Үлгілер
<question> Getlazy әдісі қандай нысандарды аудару кезінде қолданылады?
<variantright> Көріністер
<question> Trans тегі қандай нысандарды ауыстыру кезінде қолданылады?
<variantright> модельдер
<question> Testcase класының қай әдісі екі мәннің тең емес екенін күтеді?
<variantright> assertEqual
<question> Шақыру үлгісі үшін не қажет емес?
<variantright> туылған күні
<question> Төменде көрсетілгендердің қайсысы flatpages қосымшасын сақтамайды?
<variantright> пайдаланушының іздеу нәтижесі
<question> List_display кортеж атрибуты ordering өрісінде не үшін пайдаланылады?
<variantright> бет тізіміндегі нысандарды реттестіру үшін
<question> List_display атрибут кортежінде search_fields өрісінің атқаратын қызметі?
<variantright> іздеу өрісі
<question> admin.site.register(User Follower) жолы нені білдіреді?
<variantright> UserFollower класын тіркеуді
<question> Қандай жағдайда орналасу компонентін пайдалану қажет:
<variantright> желінің өткізу қабілеті шектеулі болғанда
<question> Жеке рұқсаты бар пайдаланушы үшін көріністі шектей алатын функция қалай аталады?
<variantright> декоратор
<question> if userFollower.followers.filter(username=request.user.username).exists кодын пайдаланушы толтырғыштары қандай функцияны орындайды?
<variantright> оқырман есімінің сұрау салынған есімге сәйкестігін тексеру
<question> tweets=Tweet.objects.filter(user=userProfile).order_by('-created_date') код қандай функцияны орындайды?
<variantright> твиттерді пайдаланушы аты бойынша сүзу және күні бойынша реттеу
<question> models.CharField жолы қандай өрісті орнатады?
<variantright> таңбалы
<question> urls.py файлындағы url(r'^user/(\w+)/$', Profile.as_view жолы нені білдіреді?
<variantright> әкімші интерфейсіндегі пайдаланушы профиліне сілтемені
<question> Label өрісі қай кезде қолданылады?
<variantright> HTML пішінін құру кезіндегі белгі ретінде
<question> "id" integer NOT NULL PRIMARY KEY жолы нені білдіреді:
<variantright> нөлдік емес және бүтін сан түріндегі id өрісін
<question> urls.py файлындағы url(r'^search/hashTag$',SearchHashTag.as_view())) жолы нені білдіреді?
<variantright> хэштег іздеу бетіне сілтемені
<question> Егер пайдаланушы, басқа Твит пайдаланушысының жауаптарын оқып жатқан жағдайда, қандай деректерді сақтауы тиіс?
<variantright> оқи бастаған пайдаланушы туралы деректерді
<question> 9 саны үшін humanize ішкі фреймворктің apnumber сүзгісі қандай нәтижені қайтарады? 
<variantright> тоғыз
<question> 130000000 саны үшін humanize ішкі фрейморкінің intcomma сүзгісі қандай нәтижені қайтарады?
<variantright> 130,000,000
<question> 1000000 саны үшін humanize ішкі фрейморкінің intcomma сүзгісі қандай нәтижені қайтарады?
<variantright> 1,0 млн
<question> Қайсы команда тікелей көшуді жүзеге асырады?
<variantright> migrate
<question> T = (4, 2, 3) түрінің кортежі бар. Операциялардың қайсысы t атауының кортежге (1, 2, 3) сілтеме жасауына әкеледі?
<variantright> T = (1,) + T[1:]
<question> кірістірілген enumerate () функциясы Python-да не үшін пайдаланады?
<variantright> Элементтердің өздері және олардың индекстері бойынша бір уақытта қайталау үшін.
<question> Жарнамалық мәтін жолынан барлық бірегей сөздерді жинау және шығару қажет. Аталған Python деректер түрлерінің қайсысы лайықты?
<variantright> Жиын (set)
<question> Келесі код қандай нәтиже береді?  def f(a, *pargs, **kargs): print(a, pargs, kargs) f(1, 2, 3, x=4, y=5)
<variantright> 1 (2, 3) {'x': 4, 'y': 5}
<question> X объектісінің әдістері мен атрибуттарын қалай тізімдеуге болады?
<variantright> dir(x)
<question> Келесі жазбаны қалай қысқаша ұсынуға болады? if X: A = Y else: A = Z
<variantright> A = Y if X else Z
<question> Егер n = 10**6 болса, тізімдегі нұсқаулардың қайсысы тез орындалады?
<variantright> a = (i for i in range(n))
<question> Келесі код экранға нені шығарады? a, *b, c = [1, 2] print(a, b, c)
<variantright> 1 [] 2
<question> Python көмегімен деректерді файлға жазу керек, бірақ егер файл әлі жоқ болса ғана. Open () нұсқаулығында қандай режимді көрсету керек?
<variantright> 'x'
<question> Python-ның пакет модульдерінің  __ init__.py файлындағы __all __ тізімі қандай қызмет атқарады?
<variantright> Тізім from көмегімен импортталған кезде не экспорттау керектігін анықтайды*
<question> Сынып операторының көмегімен сыныпты жариялау кезінде сынып атауынан кейін жақшаға не жазылады?
<variantright> Егер сынып бір немесе бірнеше сыныптан мұра болса, суперкласс атаулары.
<question> @Property декоры сынып әдісін сипаттауда қандай рөл атқарады?
<variantright> Сіз атрибут ретінде даналық әдісіне жүгіне аласыз.
<question> Python-да метакласс дегеніміз не және оны қалай қолдануға болады?
<variantright> Данасы басқа класс болып табылатын сынып; оларды құру кезінде сыныптардың мінез-құлқын өзгерту үшін қолданылады.
<question> Төмендегі әдістердің қайсысы Python-дағы дескрипторларға жатпайды?
<variantright> __call__
<question> Төмендегі тізімді көшіру әдістерінің қайсысы терең (deep copy) болып есептеледі?
<variantright> new_list = copy.deepcopy(old_list)
<question> functools.lru_cache не үшін қолданылады?
<variantright> Функция нәтижелерін есте сақтау үшін, осылайша қайталанатын қоңырауларды жеделдету.
<question> (with) өрнектері __enter__ әдісі контекст менеджерлерінің контекстінде не қызмет атқарады?
<variantright> With өрнегінің ішінде код блогын орындау үшін қажетті ресурстарды инициализациялайды.
<question> Пайдаланушы класы бар JSON жолында нысанды сериялау үшін қандай функцияны пайдалану керек?
<variantright> json.dumps(obj, default=lambda o: o.__dict__)
<question> Келесі мысалда Main Heading жолы қалай қолданылады:
<variantright> көрнекі пішімдеу құралдарында не пішімделетінін көру үшін қолданылады
<question> Normalize() Dom әдісі объектіні не істейді:
<variantright> Барлық мәтіндік түйіндерді біріктіреді
<question> >>> c = array([[1,2], [2,3], [4,5]]) массиві берілген. c[:,1] қимасы неге тең:
<variantright> array([2, 3, 5])
<question> Келесі кодты орындағаннан кейін ағымдағы модульде қандай жаңа атаулар пайда болады: import sre as re from re import compile
<variantright> re және compile атаулары ғана
<question> urlparse.urlsplit(«http://google.com/search?q=Python#1″): орындалу нәтижесі қандай болады:
<variantright> (‘http’, ‘google.com’, ‘/search’, ‘q=Python’, ‘1’)
<question> Курсор объектісінде next set() әдісі не үшін қолданылады:
<variantright> сұрау нәтижесінің келесі жазбалар жинағына өту үшін
<question> Бағдарламаны тексеруге көмектесетін мүмкіндіктерді қай модульден іздеу керек:
<variantright> unittest
<question> Poplib модулі POP3 серверімен жұмыс сеансы қалай ұсынылған:
<variantright> РОРЗ класының экземпляры ретінде
<question> Тізімдегі mod_python өңдегіштерінің қайсысы басқалардан бұрын орындалады:
<variantright> PythonPostReadRequestHandler
<question> Келесі өрнекті есептеу нәтижесінде не алынады: (0 < 5 <= 3) and (0 / 0):
<variantright> False (немесе 0)
<question> Төмендегі тұрақты өрнектердің қайсысы дұрыс:
<variantright> (?P(ac))
<question> Неліктен XML атаулар кеңістігі болып саналады:
<variantright> бір құжатта XML-ді әртүрлі DTD-мен біріктіру үшін
<question> Тұрақты өрнек дегеніміз не:
<variantright> көптеген жолдарды сипаттайтын үлгі.
<question> Gettext модулінің функциялары не үшін қажет:
<variantright> бағдарламаны интернационалдандыруды қамтамасыз ету үшін
<question> Ағындардың DB-API 2.0 үйлесімді модулінде, сол модульден алынған қосылымдарды да бір уақытта қолдана алатын жағдайға сәйкес келетін thread safety мәні қандай:
<variantright> 2
<question> XML өзінің тегтерін қолдана ма?
<variantright> қолданады
<question> Құлыптау мен ағындар арасындағы байланыс құралын қай сыныптың экземплярлары біріктіреді:
<variantright> Condition
<question> Python көмегімен функцияның Python тілінде жазылғаны белгілі болса, FUNC () функциясының ресми аргументтерінің аттарын қалай анықтауға болады:
<variantright> inspect.getargspec(func)
<question> Қандай әдіс берілген хабарламаның бірнеше бөлігі бар-жоғын білуге мүмкіндік береді:
<variantright> get_main_type()
<question> Қандай әдіс берілген хабарламаның бірнеше бөліктен тұратынын білуге мүмкіндік береді:
<variantright> is_multipart()
<question> Zope нені қамтиды:
<variantright> DTML сценарийлерін қолдауды
<question> Zope нені қамтиды:
<variantright> өз веб-серверін
<question> Юникодты u жолын koi8-r кодтауына қалай аударуға болады:
<variantright> u.encode(‘koi8-r’)
<question> FTP протоколы ашық жүйелердің өзара әрекеттесу моделінің қай деңгейіне жатады:
<variantright> қосымшалар
<question> Тізбекті есептеу үшін ең жақсы кірістірілген Python функциясы қандай (атап айтқанда, көпмүшенің мәнін Хорнер схемасы бойынша есептеуге):
<variantright> reduce()
<question> Python стандартты кітапханасының қай модулі WWW-мен төменгі деңгейде жұмыс істеуге мүмкіндік береді:
<variantright> httplib
<question> Объектімен барлық жұмыс тек Жалпыға қол жетімді интерфейс арқылы жүргізілетін объектінің ішкі құрылымы туралы ақпаратты жасыру деп аталады:
<variantright> инкапсуляция
<question> Нейрондық желілерді суреттердегі объектілерді тануға үйрету үшін қандай деректер жиынтығы қолданылады?
<variantright> ImageNet
<question> Бетті тану үшін қандай Python кітапханасын пайдалануға болады?
<variantright> Dlib
<question> Python-дағы қай кітапханада табиғи тілді өңдеу мәселелерін шешуге арналған көптеген модельдер бар? 
<variantright> Hugging Face
<question> Нейрондық желілерді беттерді тануға үйрету үшін қандай деректер жиынтығы қолданылады?
<variantright> Labeled Faces in the Wild
<question> Машиналық оқыту бағдарламалары мен нейрондық желілерді құру үшін қандай Тегін бұлттық платформаны қолдануға болады?
<variantright> Google Colab
<question> Path() орнына қандай әдіс қолданылады urls.py тұрақты өрнектерді маршрут ретінде беру үшін?
<variantright> url()
<question> Әр сайт үшін кэштеудің қандай пайдасы бар?
<variantright> Бүкіл веб-сайтты кэштеу үшін қолданылады.
<question> Django шаблондарында {{name}} нені білдіреді?
<variantright> Атау Python айнымалы мәндерімен қалпына келтіріледі
<question> Модельдің SQL сұрауын өңдеу үшін келесі командалардың қайсысы қолданылады?
<variantright> sql миграция
<question> Қолданыстағы (немесе ескірген) дерекқордың схемасын қарау үшін қандай Django командасы қолданылады?
<variantright> manage.py inspect
<question> Төменде келтірілген әдепкі құпия сөзді тексеру құралдарының қайсысына Django-да қолдау көрсетілмейді?
<variantright> MaximumLengthValidator
<question> Қолданыстағы жобада «Атаулар» деп аталатын жаңа қосымшаны іске қосу үшін Django командасы қандай?
<variantright> manage.py startapp names
<question> Төменде келтірілген Django-да жылдам қол жеткізу әдістерінің қайсысы html жауабын көрсетуді жеңілдетеді?
<variantright> render_to_response
<question> Төмендегі атрибуттардың қайсысы Django шаблон жүйесіндегі for циклі үшін жарамды?
<variantright> forloop.counter0
<question> жоба каталогтарында __init__.py-дың  мақсаты не?
<variantright> Python қалтаны бума ретінде анықтауға мүмкіндік береді
<question> Төмендегі командалардың қайсысы статикалық файлдарды басқару командасы емес?
<variantright> python manage.py makemigrations
<question> Төмендегі параметрлердің қайсысы main-URL s файл опциясын қамтиды?
<variantright> root_url config
<question> Django-ға негізделген құрылым?
<variantright> MVT
<question> django-да кэштеу үшін жарамды серверге жатпайды?
<variantright> django.core.cache.backends.sys.memory
<question> Django-ны орналастырудың қай нұсқасы көп жағдайда қарапайым, жылдам және тұрақты?
<variantright> mod_wsgi
<question> Django-да кэштеу стратегиялары қандай?
<variantright> A және B
<question> Python-да «Rainbow» деп аталатын сыныпты қалай дұрыс бастау керек?
<variantright> class Rainbow:
<question> Django-да HTTP сұрауын/жауабын орындаудың тәртібі қандай?
<variantright> URL > view > template
<question> Айнымалыны барлық үлгілерге қалай қол жетімді етуге болады?
<variantright> RequestContext-ті қолдану.
<question> Сыртқы кілтпен қосылған екі сыныпты өңдеуге мүмкіндік беретін бетті жасау үшін (мысалы, жеке кестелерде сақталатын сұрақ-жауап) қандай Django функциясын қолдануға болады?
<variantright> Actions
<question> Django-дағы қандай форма класының функциясы пішін өрістерін тегтер тізбегі ретінде көрсетеді?
<variantright> as_p()
<question> Django параметрлерін икемдеу үшін әдепкі параметрлер топтамасын ұсынады. Бұл параметрлерді Python-ның қай модулінен табуға болады?
<variantright> django.conf.global_settings.py
<question> PEP 8 нұсқауларына сәйкес қандай айнымалы атауы сәйкес келеді ?
<variantright> number_of_fingers
<question> Жобада 500 ауысу әрекеті жинақталған. Бұл жағдайда сіз қалай әрекет етер едіңіз?
<variantright> олардың санын азайту үшін squashmigrations пайдаланамыз
<question> Модельдермен жұмыс істеу кезінде F() объектісі қандай мүмкіндік береді? 
<variantright> модель нысанын шығармай, дерекқор операцияларын орындайды
<question> Бүтін сандарды сақтауға арналған Django өрісінің қандай түрі өріске жатпайды?
<variantright> Negative Integer Field
<question> Веб-серверді іске қосу немесе қосымшаны құру сияқты әр түрлі функцияларды орындайтын Django командасы?
<variantright> manage.py
<question> Django дизайнының бөлігі емес болып саналады?
<variantright> Айқын емес айқыннын басым болады
<question> WSGI деген не?
<variantright> Интерфейс сипаттамалары
<question> Django моделінің ағымдағы күйін файлға сақтау үшін қандай python модулін пайдалануға болады?
<variantright> Pickle
<question> Қандай пакет үшінші тарап емес және әдетте аутентификация үшін қолданылады?
<variantright> django-rest-framework-jwt
<question> Мекен-жайы көрінісі атауын құру арқылы қиын кодтаудан аулақ болуға көмектесетін django.urls пакетінде қандай функция бар?
<variantright> reverse()
<question> HTTP сұрауының ойдан шығарылған әдісі қандай?
<variantright> PAUSE
<question> django.shortcuts? ref- пакетінің бөлігі ретінде қандай көмекші функция қарастырылмаған?
<variantright> render_to_request()
<question> Үлгі айнымалы атауларында қандай таңбаларға жол берілмейді?
<variantright> тыныс белгілері
<question> Жабу үлгісі тегтерінің қайсысы жарамсыз?
<variantright> % % end if empty %
<question> Пішін экземплярын пайдалану кезінде пішін деректерінің өзгертілгенін тексеру үшін қандай әдісті қолдануға болады?
<variantright> changed_data()
<question> Django URL мекенжайын бағыттауды қалай басқарады?
<variantright> тұрақты өрнектерді қолдану
<question> Django аралық бағдарламалық жасақтамасының мақсаты қандай?
<variantright> HTTP сұраулары мен жауаптарын глобалды өңдеу үшін
<question> Берілгендердің қайсысы Django-дағы (ORM) объектілік реляциялық картаға  қатысты дұрыс?
<variantright> Python-да кодты қолдана отырып, мәліметтер базасына сұраныстар жасауға мүмкіндік береді.
<question> Django QuerySet класы дегеніміз не?
<variantright> Django жасаған дерекқорға сұраныс Python-да берілген.
<question> Django әкімші сайты не үшін қолданылады?
<variantright> Модельдер үшін автоматты түрде жасалған әкімші интерфейсін қамтамасыз ету.
<question> Django-да «миграция файлдарының» негізгі мақсаты қандай?
<variantright> Уақыт өте келе дерекқор схемасындағы өзгерістерді анықтау және сақтау.
<question> ORM – бұл?
<variantright> Object-Relational Mapping
<question> Django-да ORM не үшін қолданылады?
<variantright> ORM мәліметтер базасымен өзара әрекеттесудің көп бөлігін орындайды
<question> QuerySet дегеніміз не?
<variantright> Бұл берілген модель нысандарының тізімі
<question> all () әдісі не істейді?
<variantright> Ағымдағы QuerySet көшірмесін қайтарады
<question> Union() әдісі не істейді?
<variantright> Екі немесе одан да көп QuerySet нәтижелерін біріктіру үшін SQL UNION операторын пайдаланады
<question> difference () әдісі не істейді?
<variantright> SQL EXCEPT операторын тек QuerySet-те бар элементтерді сақтау үшін пайдаланады, бірақ басқа QuerySet-те емес
<question> using () әдісі не істейді?
<variantright> Бұл әдіс бірнеше дерекқорды пайдаланғанда, қай QuerySet дерекқорын пайдаланатынын көрсетуге арналған
`;

const qaPairs = [];
const lines = testData.split('\n').map(l => l.trim()).filter(Boolean);

for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('<question>')) {
    const qText = lines[i].replace('<question>', '').trim();
    if (i + 1 < lines.length && lines[i + 1].startsWith('<variantright>')) {
      const aText = lines[i + 1].replace('<variantright>', '').trim();
      qaPairs.push({ question: qText, answer: aText });
    }
  }
}

function findQuestionAndAnswer(selectedText) {
  for (let pair of qaPairs) {
    if (pair.question.includes(selectedText) || pair.answer.includes(selectedText)) {
      return `q: ${pair.question}\nvr: ${pair.answer}`;
    }
  }
  return '';
}

document.addEventListener('selectionchange', () => {
  const selection = document.getSelection().toString().trim();
  if (selection) {
    const result = findQuestionAndAnswer(selection);
    highlightDisplay.textContent = result;
  } else {
    highlightDisplay.textContent = '';
  }
});




