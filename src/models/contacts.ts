type Contact = {
    name: string,
    description: string,
    tags: {
        number: string,
        email: string,
        twitter: string,
        instagram: string,
        facebook: string,
        linkedin: string,
        discord: string,
        other: string
    },
    id: number
}

export default Contact;