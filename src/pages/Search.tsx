import Filter from "../Components/Search/Filter";
import Output from "../Components/Search/Output";

const Search = () => {

  
    return (
        <div className='flex h-[85vh] w-full flex-wrap sm:flex-nowrap'>
           
           <Filter/>
          <Output/>

        </div>
    );
};

export default Search;