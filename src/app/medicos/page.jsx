import connection from "@/lib/mysql";
import { revalidatePath } from "next/cache";
import Link from "next/link";

async function eliminarMedico(formData) {
    'use server'
    const id = formData.get('id')
    const consulta = 'http://localhost:3000/medicos/${id}'
    await fetch(consulta, { method: 'Delete' })

    revalidatePath('/medicos')
}

async function insertarMedico(formData) {
    'use server'
    const nombre = formData.get('nombre')
    const especialidad = formData.get('especialidad')
    const fecha_nacimiento = formData.get('fecha_nacimiento')
    await fetch('http://localhost:3000/medicos',
        {
            method: 'POST',
            body: JSON stringify({ nombre, especialidad, fecha_nacimiento
            })
        })
}

async function PaginaMedicos() {
    const response = await fetch ('http://localhost:3000/medicos')
    const data = await response.json()
    return(
        <>
            {/*Formulario para insertar médicos*/}
            <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
                <form action={insertarMedico} className="space-y-4">
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                            <input type="text" name="nombre" id="nombre" className="mt-1 block w-full p-2
                             border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                        </label>
                    </div>

                </form>
            </div>
        </>
    )
}