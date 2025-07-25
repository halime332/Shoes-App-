import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { shoesApi } from "../services/api";
import type { ShoeData } from "../types";

export function useShoes (){
    const queryClient =useQueryClient();

    const shoes = useQuery({
        queryKey:["shoes"],
        queryFn:() =>shoesApi.getAll().then((res)=>res.data),
    });

     const shoe= (id:string) =>
        useQuery({
        queryKey:["shoe",id],
        queryFn:() =>shoesApi.getById(id).then((res)=>res.data),
    });

    const create=
      useMutation({
        mutationFn:(data:ShoeData) =>shoesApi.create(data),
        onSuccess:() =>{
            //oluşturma işlemi başarılı olursa ekrandaki verilerin güncellernmesi
            //için shoes keyine sahip ayakkabı verilerini getiren query fonksiyonunu
            //tetikliyoruz
            queryClient.invalidateQueries({queryKey:["shoes"]});
            alert("Oluşturuldu");
        },
    });

    const edit=
      useMutation({
        mutationFn:({id,data}:{id:string;data:ShoeData}) =>shoesApi.edit(id,data),
        onSuccess:() =>{
             queryClient.invalidateQueries({queryKey:["shoes"]});
            alert("Düzenledi");
        },
    });


    const remove=
      useMutation({
        mutationFn:(id:string) =>shoesApi.delete(id),
        onSuccess:() =>{
             queryClient.invalidateQueries({queryKey:["shoes"]});
            alert("Kaldırıldı");
        },
    });

    return {shoes,shoe,create,edit ,remove};
}