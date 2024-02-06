import React,{ useState, useEffect} from 'react';
import { Loader, Card, FormField} from '../components';



const Home = () => {
  
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const[searchText, setSearchText] = useState('');
  
  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">The community Showcase</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-[500px]">Browse through a collection of imaginative and
         visually stunning images genrated by Dalle AI</p>
      </div>
      <div className="mt-16">
        <FormField />
      </div>
      <div className="mt-10">
        { loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ):(
          <>
            {searchText && (
            <h2 className="font-medium text-[#666e75] text-x1 mb-3">
              Showing Results for <span className="text-[#222328]">{searchText}</span>
            </h2>
          
          )}
          <div className="grid lg:grid-cols-4 sm::grid-cols-3 xs:grid-cols-2 grid-cols gap-3">

          </div>
          </>
        )
        }
      </div>

    </section>
   )
}

export default Home