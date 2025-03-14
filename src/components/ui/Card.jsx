export function Card(props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">{props.title}</h2>
      <p className="text-gray-600">{props.description}</p>
    </div>
  );
}
