import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {    //Применили компонент search-panel обервнутый в блок с классом, потому что внутри самого search-panel у нас есть input который краситься через бутстрэп, а через этот класс мы не лезем в совместимость с бутстрэп и спокойно двигаем инпут через родителя
    return (
        <div className="app">
           <AppInfo/>

           <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div> 

            <EmployeesList/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;