import type { FC } from "react";
import { useShoes } from "../../hooks/useShoes";
import Loader from "../../components/loader";
import Error from "../../components/error";


const Dashboard:FC= () => {
  const {shoes}= useShoes();

  if(shoes.isLoading) return <Loader/>


  if(shoes.isError) return <Error message={shoes.error.message}
  refetch={shoes.refetch}/>

  console.log(shoes.data);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl md:text-3xl font-semibold ">Ürünler</h1>

        <button className="bg-my-blue px-4 py-1 rounded-md text-white hover:bg-my-blue/60">Ürün Ekle</button>
      </div>

     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    İsim
                </th>
                <th scope="col" className="px-6 py-3">
                    Fiyat
                </th>
                <th scope="col" className="px-6 py-3 text-nowrap">
                  İndirim(½)
                </th>
                <th scope="col" className="px-6 py-3">
                    Eylemler
                </th>
            </tr>
        </thead>
        <tbody>
          {shoes.data?.map((item) => <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                    <img src={item.picture[0]} className="w-16 md:w-28 max-w-full max-h-full rounded-xl"
                     alt={item.name}/>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Apple Watch
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        {item.discount > 0 ? `${item.discount}%`:"indirim Yok"}
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ${item.price}
                </td>
                <td className="px-6 py-4">
                    <button  className="font-medium text-blue-600 dark:text-red-500 hover:underline pe-3">Düzenle</button>
                     <button  className="font-medium text-red-600 dark:text-red-500 hover:underline pe-3">Sil</button>
                </td>
            </tr> )}
            
        </tbody>
    </table>
</div>

    </div>
  )
};

export default Dashboard;
