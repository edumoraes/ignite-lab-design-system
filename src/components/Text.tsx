import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}
//Desestruturação de props
//Como size é opcional, se não for fornecido o padrão é 'md'
export function Text({ size = 'md', children, asChild }: TextProps) {

    //Se asChild for true podemos substituir o cildren por qualquer componente
    const Comp = asChild ? Slot : 'span';

    return (
        <Comp
            className={clsx(
                    'text-slate-500 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}
        >
            { children }
        </Comp>
    )
}