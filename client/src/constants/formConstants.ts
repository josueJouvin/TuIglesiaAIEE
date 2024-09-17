export const HORARIOS_CULTOS_PLACEHOLDER = `!! Separa con " / " cada dia !!

Domingo - Culto Principal: 10:00 AM /
Miércoles - Estudio Bíblico: 7:00 PM /
Viernes - Reunión de Jóvenes: 8:00 PM /
Sábado - Oración Matutina: 6:00 AM /
`;

export const SELECT_CUSTOM_STYLES = {
  control: (provided, state) => ({
    ...provided,
    borderColor: 'black',
    borderWidth: '2px',
    '&:hover': {
      borderColor: 'black',
    },
    boxShadow: state.isFocused ? '0 0 0 1px black' : 'none',
    '&:focus': {
      borderColor: 'black',
      boxShadow: '0 0 0 1px black',
    },
  }),
};