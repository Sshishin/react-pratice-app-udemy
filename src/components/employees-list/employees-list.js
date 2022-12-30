import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EmployeesList = ({data, onDelete}) => {

    const elements = data.map(item => {  //Автоматическое генерация компонентов на основании данных с сервера 
           const {id, ...itemProps} = item;     //Забираем id из каждого элемента а остальные пропсы деструктуризируем по остатку
        return(

            // Передаем сюда элементы списка и генерируем здесь компоненты элементов с подходящими пропсами
            // <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase}/>      //{...item} - аналог
            <EmployeesListItem key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}/>  
            ) 
    })

    return (    //Передаем уже общий список список на вызов с атрибутом в котором содержиться база данных
        <ul className="app-list list-group">

            {elements}

            {/* <EmployeesListItem name="Stuart C." cash={800 + '$'}/>
            <EmployeesListItem name="Patrick K." cash={1240 + '$'}/>
            <EmployeesListItem name="Jonhy M." cash={1910 + '$'}/> */}
        </ul>
    )
}

export default EmployeesList;