import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';



export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div 
            className={
                'flex items-center gap-3 h-12 py-4 px-3 rounded bg-slate-800 focus-within:ring-2 ring-sky-50'
            }
        >
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-slate-500'>
            {props.children}
        </Slot>
    )
}

//Como o Slot é o único elemento do componente, ele se perde para definir o nome no storybook
TextInputIcon.displayName = 'TextInput.Icon'

//Está herdando os atributos de InputHTMLAttributes
//Permite receber qualquer propriedade que um input receberia
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {

    return (
        <input
            className="bg-transparent flex-1 text-xs text-slate-50 placeholder:text-slate-500 outline-none"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}