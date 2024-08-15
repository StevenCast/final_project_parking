import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../src/pages/NotFound'; 

describe('NotFound Component', () => {
  test('should render correctly', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    // Verificamos que el texto "NotFound - 404" esté presente
    expect(screen.getByText('NotFound - 404')).toBeInTheDocument();

    // Verificamos que el enlace "Volver al inicio" esté presente
    expect(screen.getByText('Volver al inicio')).toBeInTheDocument();
  });

  test('should have correct classes for the container', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    // Verificamos que el contenedor principal tenga las clases correctas
    const container = screen.getByText('NotFound - 404').closest('div'); // Este es el contenedor interno, debemos encontrar el contenedor exterior
    const outerContainer = container.parentElement; // Seleccionamos el contenedor externo
    expect(outerContainer).toHaveClass('flex');
    expect(outerContainer).toHaveClass('justify-center');
    expect(outerContainer).toHaveClass('items-center');
    expect(outerContainer).toHaveClass('h-[100vh]');
    expect(outerContainer).toHaveClass('bg-azul-10');
  });

  test('should have correct classes for the inner container', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    // Verificamos que el contenedor interno tenga las clases correctas
    const innerContainer = screen.getByText('NotFound - 404').closest('div');
    expect(innerContainer).toHaveClass('p-10');
    expect(innerContainer).toHaveClass('border-solid');
    expect(innerContainer).toHaveClass('border-2');
    expect(innerContainer).toHaveClass('border-amarillo-10');
    expect(innerContainer).toHaveClass('rounded-lg');
  });
});

