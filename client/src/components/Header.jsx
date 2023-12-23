import React, { useState } from 'react';
import { Navbar, Typography} from '@material-tailwind/react';
export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-6 py-3 lg:px-8 lg:py-4 flex items-center justify-between">
      <div className='flex items-center cursor-pointer'>
        <div className="rounded-full h-12 w-12 bg-blue-500 flex items-center justify-center text-white font-medium text-md mr-2">
          MD
        </div>
        <Typography className='text-blue-200 ml-2'>
          Help?
        </Typography>
      </div>
    </Navbar>
  </div>
  
  )
}
