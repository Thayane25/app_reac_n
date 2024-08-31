import { View, ScrollView } from "react-native";
import ItemProduto from "../ItemProduto"
import Style from "@/app/Styles/Default";
import Produto from "@/app/models/Produto";

interface PropListaProd {
    produtos: Produto[];
}

const ListaProdutos:React.FC<PropListaProd> = ({produtos}:{produtos: Produto[]}) => {
    return (
    <ScrollView>
        <View>
            {produtos.map((p)=> 
            <ItemProduto produto={p} key={p.id}>

            </ItemProduto> )}
        </View>

    </ScrollView>

    )
}

export default ListaProdutos