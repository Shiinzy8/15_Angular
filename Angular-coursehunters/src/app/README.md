# All about how it works
[15_Angular github address](https://github.com/Shiinzy8/15_Angular)

в файле `index.html` по сути это и есть наше приложение  
которое собирается из модулей, которые в свою очередь  
собираются из компонентов
    
    <app-root>Loading...</app-root> 
        app-root это селектор компонента

в файле `app/app.component.ts` мы видим описания компонента

    @Component({
        selector: 'app-root', 
            этот селектор можно увидить в /index.html
        templateUrl: './app.component.html', 
            файл кода
        styleUrls: ['./app.component.scss'] 
            файл стилей
    })

в папке `src/app` хранится наше приложение, оно разбито на компоненты  
в файле `app/app.module.ts` мы видим

    import { AppComponent } from './app.component'; 
        импортировать компонент
        то есть подключить все файлы app.component в текущей директории
        и дать им название AppComponent
    
    bootstrap: [AppComponent] 
        значит отрисовать этот компонент

в свою очередь в корне проекта есть файл `/main.ts`
в нем мы видим

    import { AppModule } from './app.module'; 
        импортировать модуль
        то есть подключить все файлы app.module из дериктории /app
        и дать им название AppModule
       
    bootstrapModule(AppModule) 
        значит отрисовать этот модуль

## Angular CLI
что б создать компонент, надо перейти в папку где мы хотим его создать
и в командной сторке набрать

    ng g c $component_name
        g = generate - создать новое что то, будет создано в новой папке
        с = component - компонент
        $component_name - имя компонента
        
компонент будет сразу зарегистрирован в модуле
        
## Testing
файлы с расширением `.spec.ts` предназначены для тестирования
