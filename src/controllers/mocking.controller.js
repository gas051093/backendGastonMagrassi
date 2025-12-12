import generatePetsMocks from "../mocks/pets.mocks.js";
import generateUsersMocks from "../mocks/users.mocks.js";
import { usersService, petsService } from "../services/index.js";

class mocksController {
    static user = async (req, res) => {
        try {
            const users = await generateUsersMocks(50)
            return res.status(200).json({ status: "success", payload: users })
        } catch (err) {
            res.status(500).json({ error: 'Error interno en el servidor, intente de nuevo mas tarde.' })
        }
    }
    static pet = (req, res) => {
        const pets = generatePetsMocks(50)
        return res.status(200).json({ status: "success", payload: pets })
    }
    static generateData = async (req, res) => {
        const { users, pets } = req.body
        const cantUser = Number(users)
        const cantPet = Number(pets)
        if (isNaN(cantPet) || isNaN(cantUser)) return res.status(400).json({ message: "Parametros incorrectos" })
        if (!Number.isInteger(cantUser) || !Number.isInteger(cantPet)) return res.status(400).json({ message: "Solo numeros enteros" })
        if (cantPet < 1 || cantUser < 1) return res.status(400).json({ message: "Ingrese numeros mayores a 0" })
        try {
            const mocksUsers = await generateUsersMocks(cantUser)
            const mocksPets = generatePetsMocks(cantPet)
            const dataUsers = await usersService.create(mocksUsers)
            const dataPets = await petsService.create(mocksPets)
            return res.status(200).json({ status: "success", inserted: { users: cantUser, pets: cantPet } })
        } catch (err) {
            res.status(500).json({ error: 'Error interno en el servidor, intente de nuevo mas tarde.' })
        }
    }
}

export default mocksController