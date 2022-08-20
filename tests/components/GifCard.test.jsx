import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components/GifCard";

describe('Pruebas en GifCard Component', () => {

    const title = 'Simpsons';
    const url = 'https://media1.giphy.com/media/l0Hl6qQ7yvZ7O/200w.gif';

    test('Debe de hacer match con el snapshot', () => {
        const {container } = render(<GifCard title={title} url={url}/>)
        expect(container).toMatchSnapshot()
    } )

    test('Debe mostrar la imagen con el URL y ALT indicado', () => {
        render ( <GifCard title={title} url={url}/> )

        const { src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    });

    test('Debe mostrar el título con el texto indicado', () => {
        render ( <GifCard title={title} url={url}/> )

        const { textContent } = screen.getByRole('img')
        expect(screen.getByText(title)).toBeTruthy()
        
    }
    )

});