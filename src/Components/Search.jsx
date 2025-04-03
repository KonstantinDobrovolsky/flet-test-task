import classes from './Search.module.css'

const Search = ({setFilter}) => {
    function filter(e){
        setFilter(e.target.value)
    }

    return (
        <div className={`${classes.search}`}>
            <input className={`${classes.input}`} onChange={(e) => {filter(e)}} type="text" placeholder="Поиск пользователя...">

            </input>
        </div>

    );
}

export default Search;