import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='contactMe'>
      <LinkedInIcon onClick={event =>  window.location.href="https://www.linkedin.com/in/oladapo-kolawole-osagie-864315185/"}  />
      <FacebookIcon onClick={event =>  window.location.href="https://web.facebook.com/profile.php?id=100074142968612"} />
      <GitHubIcon onClick={event =>  window.location.href="https://github.com/kollydap"} />
      <TwitterIcon onClick={event =>  window.location.href="https://twitter.com/kollydapp"}  />
    </div>
  )
}

export default Footer