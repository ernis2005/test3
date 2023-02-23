import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import s from './style.module.scss'
import { display } from "@mui/system";

function Tablee({ data, deletePost,quantityInPost ,quantityDePost,mapindex}) {
  let [loading, setloading] = useState<boolean>(true);
  let [modal, setModal] = useState<boolean>(false);
  setTimeout(() => {
    setloading(() => false);
  }, 100);
  return (
    <>
    {loading?(
<>Looging</>
):(
  <div  className={s.block}>
        <Accordion>
      <AccordionSummary
        expandIcon={
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="15"
              cy="15"
              r="15"
              transform="rotate(-90 15 15)"
              fill="#F6F6FC"
            />
            <path d="M9.75 17.25L15 12L20.25 17.25" stroke="#333333" />
          </svg>
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Корзина {mapindex}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Фото</TableCell>
                  <TableCell align="right">Название</TableCell>
                  <TableCell align="right">Артикул</TableCell>
                  <TableCell align="right">Кол-во</TableCell>
                  <TableCell align="right">Цена</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Image src={row.img} alt="/" width={60} height={60} />
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.vendor}</TableCell>
                    <TableCell  align="right">
                      <div className={s.TableCell} >
                      <button onClick={()=>quantityInPost(row.id)}>+</button>
                      <p>
                      {row.quantity}
                      </p>
                      <button  onClick={()=>quantityDePost(row.id)}>-</button>
                      </div>
                     
                    </TableCell>
                    <TableCell align="right">{row.priceTotal}c</TableCell>
                    <button className={s.deletePost} onClick={() => deletePost(row.id)}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7M13 13L7 7M7 7L13 1M7 7L1 13"
                          stroke="#EA5A5A"
                        />
                      </svg>
                    </button>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Typography>
      </AccordionDetails>
    </Accordion>
    </div>
)}
  
    </>

  
  );
}

export default Tablee;
