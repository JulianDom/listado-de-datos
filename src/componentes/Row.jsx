export default function Row({ onChange, onRemove, codigo, precio, descripcion }) {
    return (
      <div>
      
        <input
          type="number"
          value={codigo}
          onChange={(e) => onChange("codigo", e.target.value)}
          placeholder="Codigo"
        />
        <input
          type="text"
          value={descripcion}
          onChange={(e) => onChange("descripcion", e.target.value)}
          placeholder="Descripcion"
        />
        <input
          type="number"
          value={precio}
          onChange={(e) => onChange("precio", e.target.value)}
          placeholder="Precio"
        />
  
        <button onClick={onRemove}>Eliminar</button>
      </div>
    );
  }
  