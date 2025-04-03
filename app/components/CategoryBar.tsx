export default function CategoryBar() {
  return (
    <div className="flex justify-center py-4 space-x-12">
      <li className="flex items-center space-x-8">
        <ul>Men</ul>
        <ul>Women</ul>
        <ul>Children</ul>
        <ul>T-Shirt</ul>
        <ul>Hoodie</ul>
      </li>
      <input
        type="text"
        className="border-gray-600 border rounded-4xl px-4 py-1 placeholder:text-sm"
        placeholder="Search"
      />
    </div>
  );
}
