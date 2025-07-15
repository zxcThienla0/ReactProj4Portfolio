import { useState } from 'react';

interface UseSearchingReturn {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function useSearching(defaultValue: string = ''): UseSearchingReturn {
  const [value, setValue] = useState<string>(defaultValue);

  return {
    value,
    onChange: (event) => setValue(event.target.value),
  };
}