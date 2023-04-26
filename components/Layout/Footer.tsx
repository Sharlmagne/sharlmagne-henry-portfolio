import { Container, Box, Typography, Link } from "@mui/material";
import onEmailClickHandler from '@/util/onEmailClickHandler';
import Image from 'next/image';

export default function Footer() {
  return <>
        <Box sx={{backgroundColor: "white", height: "2px",}}/>
        <Box component="footer" sx={{backgroundColor: "black"}}>
          <Container sx={{
              display: "flex",
              flexDirection: {md:"row", xs: "column"},
              textAlign: {md: "left", xs: "center"},
              gap: {md: "0", xs: "2rem"},
              alignItems: "center",
              color: "white",
              py: 5
          }}>
              <Box flexGrow={1} >
                  <Typography color="primary" fontSize="1rem" fontWeight="bold">Sharlmagne Henry</Typography>
                  <Typography fontWeight="bold">1 (876) 774-1070</Typography>
                  <Typography
                        fontWeight="bold"
                        onClick={onEmailClickHandler}
                        sx={{
                            cursor: "pointer",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                color: "secondary.main"
                            }
                        }}
                  >
                      sharlmagne.henry@gmail.com
                  </Typography>
                  <Box sx={{display: "flex", gap: "0.5rem", mt: "0.75rem", justifyContent: { xs: "center", md: "left"}}}>
                      <Link href="https://github.com/Sharlmagne" target="_blank">
                        <Image height={36} width={36} src="/logo/github-logo.svg" alt="github-logo"/>
                      </Link>
                      <Link href="https://linkedin.com/in/sharlmagne-henry" target="_blank">
                          <Image height={36} width={36} src="/logo/linkedin-logo.svg" alt="linkedin-logo"/>
                      </Link>
                      <Link href="https://www.hackerrank.com/sharlmagne_henry" target="_blank">
                          <Image height={36} width={36} src="/logo/hackerrank-logo.svg" alt="hackerrank-logo"/>
                      </Link>
                  </Box>
              </Box>
              <Typography fontWeight="bold">BUILT FROM SCRATCH BY ME.</Typography>
          </Container>
        </Box>
  </>;
}