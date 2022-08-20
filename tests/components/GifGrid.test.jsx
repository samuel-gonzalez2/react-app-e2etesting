import {render, screen} from '@testing-library/react';
import {GifGrid} from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    
    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            loading: true
        });

        const category = "Dragon Ball Z"
        
        render(<GifGrid category={category} />);
        screen.debug();

        expect(screen.getByText(category));
    });

    test('Debe mostra items cuando se cargan las imágenes useFetchGifs', () => {
        
    });
});