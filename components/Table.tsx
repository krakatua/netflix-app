import { Product } from "@stripe/firestore-stripe-payments"
import { BsCheck } from "react-icons/bs"

interface Props {
    products: Product[]
    selectedPlan: Product | null
}
function Table ({products, selectedPlan}:Props) {
    return (
        <table>
            <tbody className="divide-y divide-[gray]">
                <tr className="tableRow">
                    <td className="tableDataTitle">Montly Prices</td>
                    {products.map((product) => (
                        <td key={product.id} className={`tableDataFeature ${
                            selectedPlan?.id === product.id ? 'text-[#e50914]' : 'text-[gray]'}`}>
                            USD${product.prices[0].unit_amount! / 100}
                        </td>
                    ))}
                </tr>
                <tr className="tableRow">
                    <td className="tableDataTitle">Video Quality</td>
                    {products.map((product) => (
                        <td key={product.id} className={`tableDataFeature ${selectedPlan?.id === product.id ? 'text-[#e50914]' : 'text-[gray]'}`}>
                            {product.metadata.videoQuality}
                        </td>
                    ))}
                </tr>
                <tr className="tableRow">
                    <td className="tableDataTitle">Resolution</td>
                    {products.map((product) => (
                        <td key={product.id} className={`tableDataFeature ${selectedPlan?.id === product.id ? 'text-[#e50914]' : 'text-[gray]'}`}>
                            {product.metadata.resolution}
                        </td>
                    ))}
                </tr>
                <tr className="tableRow">
                    <td className="tableDataTitle">Portability</td>
                    {products.map((product) => (
                        <td key={product.id} className={`tableDataFeature ${selectedPlan?.id === product.id ? 'text-[#e50914]' : 'text-[gray]'}`}>
                            {product.metadata.portability === 'true' && (
                                 <BsCheck className="inline-block h-8 w-8"/>
                            )}
                        </td>
                    ))}
                </tr>
                
            </tbody>
        </table>
    )
}

export default Table