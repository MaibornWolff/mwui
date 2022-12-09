import { TlmButton } from 'tlm-react';

function App() {
  return (
    <div className="mt-10 w-1/3 h-screen mx-auto">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <div className="flex justify-end">
        <TlmButton className="mr-2" secondary>
          CANCEL
        </TlmButton>
        <TlmButton>SUBMIT</TlmButton>
      </div>
    </div>
  );
}

export default App;
