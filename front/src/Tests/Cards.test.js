
describe('<Album />', () => {
    it('renders the expected elements', () => {
      const mockCards = [
        { id: 1, name: 'Card 1', stackDescription: 'Description 1', img: 'img1.jpg' },
        { id: 2, name: 'Card 2', stackDescription: 'Description 2', img: 'img2.jpg' },
        { id: 3, name: 'Card 3', stackDescription: 'Description 3', img: 'img3.jpg' },
      ];
      const mockSetCard = jest.fn();
      const component = renderer.create(<Album cards={mockCards} setCard={mockSetCard} />);
      const tree = component.toJSON();
  
      expect(tree).toMatchSnapshot();
  
      const cardElements = component.root.findAllByProps({ className: 'MuiCard-root' });
      expect(cardElements).toHaveLength(mockCards.length);
  
      const buttonElements = component.root.findAllByType('button');
      expect(buttonElements).toHaveLength(mockCards.length * 2); 
    });
  });
  