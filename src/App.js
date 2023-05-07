import PaintingList from "./components/PaintingList";
import Section from "./components/Section";
import paintings from "./paintings.json";

export default function App() {
  return (
    <div>
      <Section title="Top Images">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}

// рендер по условию, рендер по коллекции
// export default function App() {
//   return (
//     <div>
//       {paintings.map((painting) => (
//         <Painting
//           key={painting.id}
//           imageUrl={painting.url}
//           title={painting.title}
//           author={painting.author.tag}
//           profileUrl={painting.author.url}
//           price={painting.price}
//           quantity={painting.quantity}
//         />
//       ))}
//     </div>
//   );
// }

// обычный рендер

// export default function App() {
//   return (
//     <div>
//       <Painting
//         imageUrl={paintings[0].url}
//         title={paintings[0].title}
//         author={paintings[0].author.tag}
//         profileUrl={paintings[0].author.url}
//         price={paintings[0].price}
//         quantity={paintings[0].quantity}
//       />
//       <Painting
//         imageUrl={paintings[1].url}
//         title={paintings[1].title}
//         author={paintings[1].author.tag}
//         profileUrl={paintings[1].author.url}
//         price={paintings[1].price}
//         quantity={paintings[1].quantity}
//       />
//       <Painting
//         imageUrl={paintings[2].url}
//         title={paintings[2].title}
//         author={paintings[2].author.tag}
//         profileUrl={paintings[2].author.url}
//         price={paintings[2].price}
//         quantity={paintings[2].quantity}
//       />
//     </div>
//   );
// }
