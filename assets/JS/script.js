const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://source.unsplash.com/random/?Houses&1.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://source.unsplash.com/random/?Houses&2.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://source.unsplash.com/random/?Houses&3.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: "Penthouse con terraza panorámica y piscina",
        src: "https://source.unsplash.com/random/?Houses&4.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica, piscina privada y vistas espectaculares.",
        ubicacion: "678 Skyline Avenue, Skyview City, CA 67890",
        habitaciones: 4,
        banos: 3,
        costo: 6000,
        smoke: false,
        pets: true
    },
    {
        nombre: "Cabaña junto al lago con muelle privado",
        src: "https://source.unsplash.com/random/?Houses&5.jpg",
        descripcion: "Esta cabaña junto al lago cuenta con un muelle privado para disfrutar del agua.",
        ubicacion: "101 Lakeview Lane, Lakeside Retreat, CA 10101",
        habitaciones: 2,
        banos: 2,
        costo: 3200,
        smoke: false,
        pets: true
    },
    {
        nombre: "Apartamento de lujo en torre de cristal",
        src: "https://source.unsplash.com/random/?Houses&6.jpg",
        descripcion: "Este apartamento de lujo se encuentra en una torre de cristal con vistas panorámicas.",
        ubicacion: "567 Glass Tower Road, Skyview Heights, CA 56789",
        habitaciones: 3,
        banos: 2,
        costo: 4800,
        smoke: false,
        pets: true
    },
    {
        nombre: "Casa colonial con patio histórico",
        src: "https://source.unsplash.com/random/?Houses&7.jpg",
        descripcion: "Esta casa colonial cuenta con un patio histórico y detalles arquitectónicos encantadores.",
        ubicacion: "123 Colonial Street, Historic Town, CA 12345",
        habitaciones: 4,
        banos: 3,
        costo: 4200,
        smoke: true,
        pets: false
    },
    {
        nombre: "Apartamento con vistas al mar",
        src: "https://source.unsplash.com/random/?Houses&8.jpg",
        descripcion: "Este apartamento ofrece impresionantes vistas al mar y acceso a la playa.",
        ubicacion: "789 Oceanfront Avenue, Beachside Paradise, CA 78901",
        habitaciones: 2,
        banos: 2,
        costo: 3500,
        smoke: true,
        pets: false
    },
    {
        nombre: "Villa de playa con acceso directo al mar",
        src: "https://source.unsplash.com/random/?Houses&9.jpg",
        descripcion: "Esta villa de playa ofrece acceso directo al mar y unas vistas impresionantes del océano.",
        ubicacion: "321 Beachfront Road, Seaside Paradise, CA 32123",
        habitaciones: 6,
        banos: 4,
        costo: 7500,
        smoke: false,
        pets: true
    },
    {
        nombre: "Loft de diseño en el centro histórico",
        src: "https://source.unsplash.com/random/?Houses&10.jpg",
        descripcion: "Este loft de diseño combina elementos modernos con el encanto del centro histórico.",
        ubicacion: "101 Historic Lane, Old Town, CA 10101",
        habitaciones: 1,
        banos: 1,
        costo: 2000,
        smoke: true,
        pets: false
    },
    {
        nombre: "Casa rústica en las montañas",
        src: "https://source.unsplash.com/random/?Houses&11.jpg",
        descripcion: "Esta casa rústica está rodeada de naturaleza y ofrece un refugio tranquilo en las montañas.",
        ubicacion: "456 Mountain Road, Serenity Valley, CA 45678",
        habitaciones: 5,
        banos: 3,
        costo: 5500,
        smoke: false,
        pets: true
    },
    {
        nombre: "Apartamento moderno en el centro de la ciudad",
        src: "https://source.unsplash.com/random/?Houses&12.jpg",
        descripcion: "Este apartamento moderno se encuentra en el corazón de la ciudad, cerca de todas las comodidades.",
        ubicacion: "789 Urban Avenue, Downtown, CA 78901",
        habitaciones: 2,
        banos: 2,
        costo: 2800,
        smoke: false,
        pets: false
    }
]

const propiedades_alquiler = [
    {
        nombre: "Casa adosada en comunidad cerrada",
        src: "https://source.unsplash.com/random/?Houses&13.jpg",
        descripcion: "Esta casa adosada se encuentra en una comunidad cerrada con seguridad las 24 horas.",
        ubicacion: "456 Gated Community Lane, Safe Haven, CA 45678",
        habitaciones: 3,
        banos: 2,
        costo: 3200,
        smoke: false,
        pets: true
    },
    {
        nombre: "Villa de montaña con jacuzzi al aire libre",
        src: "https://source.unsplash.com/random/?Houses&14.jpg",
        descripcion: "Esta villa de montaña ofrece un jacuzzi al aire libre y vistas espectaculares.",
        ubicacion: "321 Mountain View Road, Mountainville, CA 32109",
        habitaciones: 5,
        banos: 4,
        costo: 5800,
        smoke: false,
        pets: true
    },
    {
        nombre: "Loft industrial en el distrito artístico",
        src: "https://source.unsplash.com/random/?Houses&15.jpg",
        descripcion: "Este loft industrial se encuentra en el vibrante distrito artístico de la ciudad.",
        ubicacion: "765 Creative Street, Artsyville, CA 76543",
        habitaciones: 1,
        banos: 1,
        costo: 2200,
        smoke: true,
        pets: false
    },
    {
        nombre: "Casa moderna con jardín zen",
        src: "https://source.unsplash.com/random/?Houses&16.jpg",
        descripcion: "Esta casa moderna cuenta con un jardín zen y un diseño minimalista.",
        ubicacion: "543 Zen Garden Way, Zenville, CA 54321",
        habitaciones: 3,
        banos: 2,
        costo: 3800,
        smoke: false,
        pets: false
    },
    {
        nombre: "Penthouse de lujo con piscina privada",
        src: "https://source.unsplash.com/random/?Houses&17.jpg",
        descripcion: "Este penthouse de lujo cuenta con una piscina privada en la terraza y vistas panorámicas.",
        ubicacion: "987 Skyline Avenue, Skyview City, CA 98765",
        habitaciones: 4,
        banos: 3,
        costo: 6000,
        smoke: false,
        pets: true
    },
    {
        nombre: "Apartamento de diseño en el centro histórico",
        src: "https://source.unsplash.com/random/?Houses&18.jpg",
        descripcion: "Este elegante apartamento de diseño se encuentra en el centro histórico de la ciudad.",
        ubicacion: "678 Heritage Street, City Center, CA 67890",
        habitaciones: 2,
        banos: 2,
        costo: 3200,
        smoke: true,
        pets: false
    },
    {
        nombre: "Cabaña acogedora en el bosque",
        src: "https://source.unsplash.com/random/?Houses&19.jpg",
        descripcion: "Esta cabaña acogedora está rodeada de árboles y es perfecta para una escapada tranquila.",
        ubicacion: "234 Forest Lane, Woodland Retreat, CA 23456",
        habitaciones: 2,
        banos: 1,
        costo: 2500,
        smoke: false,
        pets: true
    },
    {
        nombre: "Apartamento de lujo con vistas al río",
        src: "https://source.unsplash.com/random/?Houses&20.jpg",
        descripcion: "Este apartamento de lujo ofrece impresionantes vistas al río y comodidades de primera clase.",
        ubicacion: "543 Riverfront Avenue, Riverview, CA 54321",
        habitaciones: 3,
        banos: 2,
        costo: 4800,
        smoke: false,
        pets: true
    },
    {
        nombre: "Casa histórica con jardín encantador",
        src: "https://source.unsplash.com/random/?Houses&21.jpg",
        descripcion: "Esta casa histórica cuenta con un jardín encantador y detalles arquitectónicos únicos.",
        ubicacion: "876 Heritage Street, Classic Town, CA 87654",
        habitaciones: 4,
        banos: 2,
        costo: 4200,
        smoke: true,
        pets: false
    },
    {
        nombre: "Casa contemporánea con piscina",
        src: "https://source.unsplash.com/random/?Houses&22.jpg",
        descripcion: "Esta casa contemporánea cuenta con una amplia piscina y un jardín exuberante.",
        ubicacion: "123 Garden Street, Sunnyville, CA 12345",
        habitaciones: 4,
        banos: 2,
        costo: 3500,
        smoke: true,
        pets: true
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "https://source.unsplash.com/random/?Houses&23.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    }
]

    function generarCard(data) {
    const smoke = data.smoke?'<p class="text-success"><i class="fas fa-smoking"></i> Se permite fumar</p>':'<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
    const pets = data.pets?'<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>':'<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>';
    const habitaciones = data.habitaciones>1?data.habitaciones+ " Habitaciones":data.habitaciones+" Habitación";
    const banos = data.banos>1?data.banos+" Baños":data.banos+" Baño";
    const template = `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
            src="${data.src}"
            class="card-img-top"
            alt="Imagen del departamento"
            />
            <div class="card-body">
            <h5 class="card-title">
                ${data.nombre}
            </h5>
            <p class="card-text">
                ${data.descripcion}
            </p>
            <p>
                <i class="fas fa-map-marker-alt"></i> ${data.ubicacion}
            </p>
            <p>
                <i class="fas fa-bed"></i> ${habitaciones} |
                <i class="fas fa-bath"></i> ${banos}
            </p>
            <p><i class="fas fa-dollar-sign"></i> 4.500</p>
            ${smoke}
            ${pets}
            </div>
        </div>
    </div>`;

    return template;
}