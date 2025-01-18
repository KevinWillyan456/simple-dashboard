import { CircleDollarSign } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card'

export function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg text-gray-800 sm:text-xl">
                        Últimos clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto h-4 w-4" />
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/devfraga.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold sm:text-base">
                            Sujeito Programador
                        </p>
                        <span className="text-[12px] text-gray-400 sm:text-sm">
                            teste@teste.com
                        </span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/devfraga.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold sm:text-base">
                            Sujeito Programador
                        </p>
                        <span className="text-[12px] text-gray-400 sm:text-sm">
                            teste@teste.com
                        </span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/devfraga.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold sm:text-base">
                            Sujeito Programador
                        </p>
                        <span className="text-[12px] text-gray-400 sm:text-sm">
                            teste@teste.com
                        </span>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}
