import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  const blogData = {
    hoth: {
      image: "/src/assets/images/blog-hoth.webp",
      title: "La Batalla de Hoth: Miniaturas, Estrategia y Emoción Galáctica",
      content: `"La Batalla de Hoth" es un juego de miniaturas que combina estrategia táctica, posicionamiento y objetivos dinámicos. Ambientado en el universo de Star Wars, este juego permite a los jugadores recrear la icónica batalla de Hoth, donde el Imperio Galáctico enfrenta a la Alianza Rebelde en un entorno nevado y hostil. Los jugadores deben gestionar recursos limitados, como unidades de infantería, vehículos y héroes legendarios, mientras navegan por un tablero modular que cambia con cada partida. La estrategia radica en el equilibrio entre ataque y defensa, aprovechando el terreno para emboscadas y retiradas tácticas. Con mecánicas de dados y cartas de comando, cada decisión cuenta, creando momentos de tensión y emoción. Ideal para fans de Star Wars y amantes de los juegos de estrategia, "La Batalla de Hoth" ofrece horas de diversión competitiva y narrativa inmersiva.`
    },
    magic: {
      image: "/src/assets/images/blog-magic.webp",
      title: "Magic: The Gathering - Un multiverso en expansión infinita",
      content: `Magic no solo innova en sus mecánicas, sino que también nos transporta a mundos nuevos con cada expansión. Desde los planos etéreos de Ravnica hasta las tierras salvajes de Zendikar, cada set introduce criaturas míticas, hechizos poderosos y artefactos legendarios que expanden el lore del multiverso. Los jugadores pueden explorar temas como la guerra entre planos, la evolución de especies mágicas y alianzas improbables entre razas. Con más de 25 años de historia, Magic continúa evolucionando, incorporando nuevos formatos como Pioneer y Explorer, que mantienen fresca la experiencia para veteranos y novatos. La comunidad global de Magic fomenta torneos, eventos en línea y creaciones personalizadas, haciendo que el juego sea más que cartas: es una cultura viva.`
    },
    magicTMNT: {
      image: "/src/assets/images/blog-magicTMNT.webp",
      title: "Magic x TMNT – ¡Cowabunga en el Multiverso!",
      content: `Leonardo, Donatello, Michelangelo y Raphael llegan a Magic para patear traseros... ¡y lanzar hechizos! Esta colaboración épica fusiona el caos urbano de las Tortugas Ninja con la magia de Magic: The Gathering. Imagina mazos construidos alrededor de las habilidades únicas de cada tortuga: Leonardo con su katana estratégica, Donatello con inventos tecnológicos, Michelangelo con su nunchaku impredecible y Raphael con su sai agresivo. Las cartas incluyen criaturas mutantes, hechizos de pizza y artefactos como el cañón de buey. Los sets crossover exploran temas de heroísmo adolescente, amistad y lucha contra el crimen, con ilustraciones vibrantes que capturan la esencia de ambas franquicias. Perfecto para fans de acción y estrategia, este set invita a partidas rápidas y épicas donde el multiverso se encuentra con las alcantarillas de Nueva York.`
    },
    nextsets: {
      image: "/src/assets/images/blog-nextsets.webp",
      title: "Próximos Sets de Magic: ¿Qué nos espera en 2026?",
      content: `Con sets programados que incluyen crossovers con *The Hobbit*, *Marvel*, *Star Trek* y más, 2026 promete ser un año revolucionario para Magic: The Gathering. El set de *The Hobbit* transportará a los jugadores a la Tierra Media, con cartas inspiradas en personajes como Bilbo, Gandalf y Gollum, explorando temas de aventura, corrupción y alianza. Los crossovers con Marvel y Star Trek introducirán héroes icónicos como Iron Man y el Capitán Kirk, fusionando superpoderes con magia arcana. Además, sets temáticos como "Universos Unidos" permitirán mezclar elementos de diferentes franquicias en un mismo mazo. Los rumores apuntan a mecánicas innovadoras, como habilidades compartidas entre cartas y eventos globales que conecten comunidades. Con expansiones mensuales y eventos especiales, Magic continúa expandiendo su multiverso, manteniendo a los jugadores al borde de sus asientos.`
    },
    ninos: {
      image: "/src/assets/images/blog-ninos.webp",
      title: "Jugar con Niños: ¿Por qué nos cuesta tanto como adultos?",
      content: `El juego no es solo cosa de niños: también puede ser una ventana al vínculo familiar. En una sociedad donde los adultos están constantemente ocupados con trabajo y responsabilidades, jugar con los más pequeños puede parecer una pérdida de tiempo, pero en realidad fortalece lazos emocionales y enseña lecciones valiosas. Juegos como cartas, puzzles o juegos de rol permiten a los padres compartir risas, creatividad y momentos de aprendizaje mutuo. Estudios muestran que el juego reduce el estrés, mejora la comunicación y fomenta la empatía. Sin embargo, muchos adultos sienten vergüenza o incomodidad al "bajar su nivel" para jugar con niños, temiendo parecer tontos. La clave está en abrazar la diversión sin juicios, recordando que el juego es una forma natural de conexión humana. Al final, esos momentos compartidos crean recuerdos duraderos y ayudan a los niños a desarrollar confianza y habilidades sociales.`
    },
    sonic: {
      image: "/src/assets/images/blog-sonic.webp",
      title: "Secret Lair x Sonic – ¡Velocidad y nostalgia en tus partidas!",
      content: `Esta edición limitada de Secret Lair combina la velocidad de Sonic con el formato de cartas únicas de MTG. Diseñada para fans nostálgicos, incluye ilustraciones vibrantes de Sonic, Tails, Knuckles y Eggman en escenarios icónicos como Green Hill Zone. Las cartas ofrecen mecánicas rápidas y agresivas, con hechizos que permiten movimientos instantáneos y criaturas que "corren" por el tablero. Temas de velocidad, amistad y aventura se entrelazan con el lore de Sonic, creando mazos temáticos que capturan la esencia del erizo azul. Limitada a tiradas pequeñas, esta colaboración es un tesoro para coleccionistas, con foil premium y arte exclusivo. Perfecta para partidas casuales o torneos temáticos, Secret Lair x Sonic trae un soplo de aire fresco al multiverso, recordándonos que la magia puede ser tan rápida como un spin dash.`
    },
    zombies: {
      image: "/src/assets/images/blog-zombies.webp",
      title: "Marvel Zombies: El crossover entre Zombicide y el universo Marvel",
      content: `Marvel Zombies es una versión sangrienta y brutal del clásico *Zombicide*, donde ahora los protagonistas son superhéroes zombificados. En este crossover, héroes como Spider-Man, Wolverine y Captain America se convierten en no-muertos hambrientos, luchando contra hordas de zombis en un mundo post-apocalíptico. Las mecánicas incluyen combate táctico, gestión de recursos y decisiones morales, como sacrificar aliados para sobrevivir. Con miniaturas detalladas y escenarios modulares inspirados en Nueva York y Wakanda, el juego explora temas oscuros de identidad y supervivencia. Ideal para fans de Marvel y juegos de zombis, ofrece una experiencia intensa y narrativa, donde la línea entre héroe y monstruo se difumina. Con expansiones planeadas, Marvel Zombies promete horas de terror y estrategia en el universo Marvel.`
    }
  };

  const blog = blogData[id];

  if (!blog) {
    return (
      <div className="screen">
        <h1>Blog no encontrado</h1>
        <p>El artículo que buscas no existe.</p>
      </div>
    );
  }

  return (
    <div className="screen">
      <div className="blog-detail">
        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        <h1 className="blog-detail-title">{blog.title}</h1>
        <p className="blog-detail-content">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
