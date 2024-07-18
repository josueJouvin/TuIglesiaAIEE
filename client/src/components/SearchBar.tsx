import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Select,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <section>
      <span className="bg-black text-white rounded-t-md py-3 px-6 inline-block">
        Iglesia
      </span>
      <Fieldset>
        <form className="border border-solid border-[#999] flex justify-between h-16 gap">
          <Field>
            <Input className="border-none px-2 w-[200px] h-full" name="ciudad" placeholder="Ciudad"/>
          </Field>
          <Field>
            <Input className="border-none px-2 w-[200px] h-full" name="canton" placeholder="Cantón"/>
          </Field>
          <Field>
            <Select className="border-none px-2 w-[200px] h-full" name="servicios">
              <option>Servicios</option>
              <option>Sunday Service</option>
              <option>Bible Study</option>
              <option>Youth Group</option>
              <option>Community Outreach</option>
            </Select>
          </Field>
          <Button className="border-none cursor-pointer bg-[#fece51] flex-1">
            <MagnifyingGlassIcon className="size-10 m-auto text-white"/>
          </Button>
        </form>
      </Fieldset>
    </section>
  );
};

export default SearchBar;
