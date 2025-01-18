import {
    Home,
    Package,
    PanelBottom,
    Settings2,
    ShoppingBag,
    Users,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40 sm:hidden">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                size="icon"
                                variant="outline"
                                className="sm:hidden"
                            >
                                <PanelBottom className="h-5 w-5" />
                                <span className="sr-only">
                                    Abrir / fechar menu
                                </span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="sm:max-w-xs">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="texnt-lg flex h-10 w-10 items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground md:text-base"
                                    prefetch={false}
                                >
                                    <Package className="h-5 w-5 transition-all" />
                                    <span className="sr-only">
                                        Logo do projeto
                                    </span>
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground transition-all hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Home className="h-5 w-5" />
                                    Início
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground transition-all hover:text-foreground"
                                    prefetch={false}
                                >
                                    <ShoppingBag className="h-5 w-5" />
                                    Pedidos
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground transition-all hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Package className="h-5 w-5" />
                                    Produtos
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground transition-all hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Users className="h-5 w-5" />
                                    Clientes
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground transition-all hover:text-foreground"
                                    prefetch={false}
                                >
                                    <Settings2 className="h-5 w-5" />
                                    Configurações
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>
        </div>
    )
}
