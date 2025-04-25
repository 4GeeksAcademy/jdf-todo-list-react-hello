import React, { useState } from 'react';

// Componente ToDoList
const ToDoList = () => {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState('');

  // Función para eliminar una tarea
  const eliminarTarea = (indexAEliminar) => {
    const nuevasTareas = tareas.filter((_, index) => index !== indexAEliminar);
    setTareas(nuevasTareas);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>To do list</h1>
      <input
        type="text"
        placeholder="Escribe una tarea y presiona Enter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && input.trim() !== '') {
            setTareas([...tareas, input.trim()]);
            setInput('');
          }
        }}
        style={styles.input}
      />

      <div style={styles.lista}>
        {tareas.length === 0 ? (
          <p style={styles.vacio}>No hay tareas, añadir tareas</p>
        ) : (
          tareas.map((tarea, index) => (
            <div
              key={index}
              style={styles.tarea}
              className="tarea"
            >
              <span>{tarea}</span>
              <button
                style={styles.botonEliminar}
                className="boton-eliminar"
                onClick={() => eliminarTarea(index)}
              >
                ❌
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Estilos en línea
const styles = {
  container: {
    width: '400px',
    margin: '0 auto',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  titulo: {
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  lista: {
    marginTop: '20px',
  },
  tarea: {
    position: 'relative',
    background: '#f2f2f2',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    transition: 'all 0.3s ease',
  },
  vacio: {
    textAlign: 'center',
    color: '#888',
  },
  botonEliminar: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    color: '#888',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'none',
  },
};

// Exporta el componente
export default ToDoList;
