export interface User {
    userEmail?: number;
    name: string;
    email: string
    password: string
}

export const getUsers = async (chosenMethod: string, user?: User, userEmail?: string): Promise<User[]> => {
    let userEmailSelected = ""

    if (userEmail) {
        userEmailSelected = userEmail
    }

    try {
        const options: RequestInit = {
            method: chosenMethod,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        if ((chosenMethod === "POST") && user) {
            options.body = JSON.stringify(user);
        }
        const response = await fetch(`http://localhost:3006/users/${userEmailSelected}`, options);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('erro pai', error)
        return []
    }
}

