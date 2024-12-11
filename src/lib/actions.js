'use server'

import { redirect } from "next/navigation";
import { deleteCookie, setCookie } from "./cookies";

const usuarios = [
    {name:'medico1', key:'medico1'},
    {name:'medico2', key:'medico2'}
]

const name = formData.get('name')
const email = formData.get('email')
const key = formData.get('key')
const callbackUrl = formData.get('callbackUrl')

const usuarioEncontrado = usuario.find((usuario) =>
(usuario.name === name && usuario.key === key)
)
if (!usuarioEncontrado) return