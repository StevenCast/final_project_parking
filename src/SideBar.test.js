// SideBar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect'; // para las aserciones adicionales
import { SideBar, AdminLayout, GuardiaLayout, UsuarioLayout } from './Layouts/SideBar';
import { Header } from './components/Header';
import { LeftSideMenu } from './components/LeftSideMenu';
import { Card } from './components/ui';

// Mock de los datos de navegación
const mockNavData = [
  { title: 'Home', link: '/' },
  { title: 'Profile', link: '/profile' }
];

// Mock de componentes para pruebas
jest.mock('../src/components/Header', () => ({ Header: () => <div>Header</div> }));
jest.mock('../src/components/LeftSideMenu', () => ({
  LeftSideMenu: ({ data }) => (
    <div>
      LeftSideMenu
      <ul>{data.map((item, index) => <li key={index}>{item.title}</li>)}</ul>
    </div>
  )
}));
jest.mock('../src/components/ui', () => ({
  Card: ({ children }) => <div className="card">{children}</div>
}));

describe('SideBar', () => {
  test('renders with default content', () => {
    render(<SideBar />);
    expect(screen.getByText('Default Header')).toBeInTheDocument();
    expect(screen.getByText('Default Left Side')).toBeInTheDocument();
    expect(screen.getByText('Default Body Content')).toBeInTheDocument();
  });

  test('renders with provided content', () => {
    render(
      <SideBar
        header={<div>Custom Header</div>}
        leftSide={<div>Custom Left Side</div>}>
        <div>Custom Body Content</div>
      </SideBar>
    );
    expect(screen.getByText('Custom Header')).toBeInTheDocument();
    expect(screen.getByText('Custom Left Side')).toBeInTheDocument();
    expect(screen.getByText('Custom Body Content')).toBeInTheDocument();
  });
});

describe('AdminLayout', () => {
  test('renders with AdminLayout content', () => {
    render(
      <SideBar
      header={<div>Custom Header</div>}
      leftSide={<div>Custom Admin Content</div>}>
      <div>Custom Body Content</div>
    </SideBar>
    );
    expect(screen.getByText('Custom Header')).toBeInTheDocument();
    expect(screen.getByText('Custom Admin Content')).toBeInTheDocument();
    expect(screen.getByText('Custom Body Content')).toBeInTheDocument();
  });
});

describe('GuardiaLayout', () => {
  test('renders with GuardiaLayout content', () => {
    render(
      <SideBar
      header={<div>Custom Header</div>}
      leftSide={<div>Custom Guardia Content</div>}>
      <div>Custom Body Content</div>
    </SideBar>
    );
    expect(screen.getByText('Custom Header')).toBeInTheDocument();
    expect(screen.getByText('Custom Guardia Content')).toBeInTheDocument();
    expect(screen.getByText('Custom Body Content')).toBeInTheDocument();
  });
});

describe('UsuarioLayout', () => {
  test('renders with UsuarioLayout content', () => {
    render(
      <SideBar
      header={<div>Custom Header</div>}
      leftSide={<div>Custom Usuario Content</div>}>
      <div>Custom Body Content</div>
      </SideBar>
    );
    expect(screen.getByText('Custom Header')).toBeInTheDocument();
    expect(screen.getByText('Custom Usuario Content')).toBeInTheDocument();
    expect(screen.getByText('Custom Body Content')).toBeInTheDocument();
  });
});
