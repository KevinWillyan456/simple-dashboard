import {
    Home,
    LogOut,
    Package,
    PanelBottom,
    Settings2,
    ShoppingBag,
    Users,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '../ui/sheet'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../ui/tooltip'

export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link
                            href="#"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                        >
                            <Package className="h-4 w-4" />
                            <span className="sr-only">Dashboard Avatar</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <Home className="h-5 w-5" />
                                    <span className="sr-only">Início</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Início</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <ShoppingBag className="h-5 w-5" />
                                    <span className="sr-only">Pedidos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Pedidos
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <Package className="h-5 w-5" />
                                    <span className="sr-only">Produtos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Produtos
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <Users className="h-5 w-5" />
                                    <span className="sr-only">Clientes</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Clientes
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <Settings2 className="h-5 w-5" />
                                    <span className="sr-only">
                                        Configurações
                                    </span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Configurações
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>

                <nav className="mt-auto flex flex-col items-center justify-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <LogOut className="h-5 w-5 text-red-500 hover:text-red-600" />
                                    <span className="sr-only">Sair</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Sair</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

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

                        <SheetTitle>Dashboard Simple</SheetTitle>

                        <SheetDescription>
                            <span className="sr-only">Menu de opções</span>
                        </SheetDescription>

                        <SheetContent
                            side="left"
                            className="sm:max-w-xs"
                            aria-describedby="Menu com opções"
                        >
                            <div className="flex h-full flex-col">
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

                                <nav className="mt-auto grid gap-6 text-lg font-medium">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-4 px-2.5 text-red-500 transition-all hover:text-red-600"
                                    >
                                        <LogOut />
                                        Sair
                                    </Link>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>
        </div>
    )
}
