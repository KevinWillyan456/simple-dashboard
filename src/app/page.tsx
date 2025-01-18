import { BadgeDollarSign, DollarSign, Percent, Users } from 'lucide-react'
import { ChartOverview } from './_components/chart'
import { Sales } from './_components/sales'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './_components/ui/card'

export default function Home() {
    return (
        <main className="p-4 sm:ml-14">
            <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="select-none text-lg text-gray-800 sm:text-xl">
                                Total vendas
                            </CardTitle>
                            <DollarSign className="ml-auto h-4 w-4" />
                        </div>

                        <CardDescription>
                            Total vendas em 90 dias
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <p className="text-base font-bold sm:text-lg">
                            R$ 40.000,00
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="select-none text-lg text-gray-800 sm:text-xl">
                                Novos clientes
                            </CardTitle>
                            <Users className="ml-auto h-4 w-4" />
                        </div>

                        <CardDescription>
                            Novos clientes em 30 dias
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <p className="text-base font-bold sm:text-lg">234</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="select-none text-lg text-gray-800 sm:text-xl">
                                Pedidos hoje
                            </CardTitle>
                            <Percent className="ml-auto h-4 w-4" />
                        </div>

                        <CardDescription>Total de pedidos hoje</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <p className="text-base font-bold sm:text-lg">65</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="select-none text-lg text-gray-800 sm:text-xl">
                                Total pedidos
                            </CardTitle>
                            <BadgeDollarSign className="ml-auto h-4 w-4" />
                        </div>

                        <CardDescription>
                            Total pedidos em 30 dias
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <p className="text-base font-bold sm:text-lg">2300</p>
                    </CardContent>
                </Card>
            </section>

            <section className="mt-4 flex flex-col gap-4 md:flex-row">
                <ChartOverview />
                <Sales />
            </section>
        </main>
    )
}
