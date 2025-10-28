import Card from './components/Card'


const App = () => {
 const jobOpenings = [
  {
    brandLogo: "data:image/webp;base64,UklGRvoEAABXRUJQVlA4IO4EAABQKACdASokAeoAPp1OpU0lpCOiItPYeLATiWVu4XX6ufsx04+c5gbpSUAlDz0ehnxQulf5jPOz9JP+H9QD+x9TD6AHlz+zvkIF8Hh7sjlTxBmSt+bMSm7Ci7DcktfkCQEgJASAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBICMLnS136cmUhVpUr1qrz8OawrX4hq/RVmH2WyP0TRyAgnkiOjaNtgNfJ2nrX5AkBGKpa6KZ2gJzHErI4w02mXXsjMGNLsyEVhRlOMtYxBo7ZLQORGRqYHrOrrxQcbVsyEVgNEwnNjJ3J1IPvxrC3BzqcHueSplNZTv7/eHNYVkVeljiP86mEQXDZePvgb0dmnbHUxkc1hWvxJjswWcUwhXBMxZfzSUgSAkBICQfMkBICQEgJASAkBICQEgJASAkBICQEgJASAkBICPwAAP7/jogAAAGF2hkDuxhplbO30NU98ZRvwITwyTQH/4/kvQkEitNHBSP4J8zXyephavsQz+79OjNHzCY1PH2D39VDokEJM/23bBw2V6HZRATHngFUy3L3MkWZN3f+x86wAjoPqEgWDrTN0WdWS7arczNjdG89Tr+7m29kk01Cl0DIs1CMTryPDiXYtPem5/js4l/+QRk8w8AqO9QOJG30iBWy+jkK5QCRJMpgHn4QRqgMcjTOww0fAY5ZXCqkR0mmG5Pwa6xsg8jB+/LK4WmZsZNg2vgg5JWTdFQ3CJUIN6BAs6GdjTXmiiueneBjiVqcoKB/LPoRfgcGn3k/Cq/nw8LsLdC2dubsNZwCHxgHBQL36nPRK6EV46dg+LtJ7Pwy5jLWx2C73GJYLcjyAPErUQqcfeAEfe1jXcxg/R2HQEx+vx+gPG17msmlgv8KMLzu1kvRMmRXMVHUfMs4yGiizQmJATEquZQpDbn7X1qhQjFfV3SG8gZWZBiDTI7kkIGZsoFSM4azJ9kkDVbJXBB/NzTcYmezRSGmOGkOA6NGSrGFAAUCI1Qo18HuEEwTtP3xSd+iBM3Ko4G0ZatAemH9gqi6rOi5dxvI6svaylwHv9jfStJQ5EDBAJor9BXFClzeohB46tw/0x7hZOXgTXojPufLnE9SekX/zWqPygzCIvBGz3KBPJqY3kn92CrmsOS2kBJ2xNKcEmTNz8raz6q+xfyznF9w2m4d4dmNYDHRLjGJyjhSPznHdDfzx/ijFYCTrRYURh8V94GIsiMGYMLa5tLMomDW/oee+2TxDB9VJKWZnO9rehyIaWFITDx7oxJyNRRKK+nH9NZRtbskA3JEVQATpIM7fqEzSz8bT0/bQwWnBSJpsZLmmn6aEFcuGY6lVD0OtvV4O9hSayVzeRUuBcR+nONv1/E+Ao+dyMpCH8jHuaa3qK2D8hpDhQcdJ/926jj9O1FDzkrtOAIDrVVC2gZ0zPb8dLobbURbPWf2mkn5HUMpNmmNXFhGDS6BUf1Ht6/SoIOPCNnU1EXjja+0k30klz1hVicGQSBEqtXQmbwc+b8wed+xOCKo94H63zNdsLdKwNgW8IvgRMBlnqznmH6eYhJEr2rnxG31HA6THuq7WqmoVfG8OWR8ZCwABF71uigjxpMyZP+9DZ6pT9PvO292GHoFwyR3eDcT8R+uSykjjJGzanhNvfSxMy8mesniY+5DPJzhQWwpfBmGoQAAAAAAAA==",
    brandName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    payPerHour: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "data:image/webp;base64,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",
    brandName: "Microsoft",
    datePosted: "5 days ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    payPerHour: 60,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.BHsDLmb5Z-pq2W2DwOaZCAHaGF?w=204&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    brandName: "Amazon",
    datePosted: "1 day ago",
    post: "Data Analyst",
    tag1: "Part-time",
    tag2: "Junior Level",
    payPerHour: 30,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.BHsDLmb5Z-pq2W2DwOaZCAHaGF?w=204&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    brandName: "Spotify",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Mid Level",
    payPerHour: 40,
    location: "Pune, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.r40R5hLvEyRbtwIopUrD0wHaHa?w=164&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    brandName: "Zoho",
    datePosted: "7 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    payPerHour: 35,
    location: "Chennai, India"
  },
  {
    brandLogo: "data:image/webp;base64,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",
    brandName: "Adobe",
    datePosted: "4 days ago",
    post: "Product Manager",
    tag1: "Full-time",
    tag2: "Senior Level",
    payPerHour: 70,
    location: "Noida, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.jo5dPgs47NBogIJiW78VkQHaE8?w=259&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    brandName: "Intel",
    datePosted: "6 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Part-time",
    tag2: "Senior Level",
    payPerHour: 55,
    location: "Ahmedabad, India"
  },
  {
    brandLogo: "data:image/webp;base64,UklGRqwEAABXRUJQVlA4IKAEAACQHwCdASqVAOoAPp1On0wlpCMipdcYyLATiWdsZu3nBY+IjJanWvKgW5VCMQdtJnj9wBvU1Ol/ao6W7jNa2FaK47LKqv751lOfG3BCkN98msoRzQkYvKOLD9DXUVYGJFqqeuK23WAxAVbFZuMxS/hx7Kjyd2OMlCgScE5qCyEX860sx4eErqwXbbbPnX/ohU6AJYxfs1XZdpVvx8pTZdwB82njSjiCHY2QCAtlr2UYspd5mw5aIUb3OxBgDRl1ia3ReaBtjv4l8/9gdjVxZn5TvQpu6kRhr2G4FP0A2lVd52UygtEM+uKBZzj0d6GaEloVMM1j6qwZ51EYxiOqms0/a9QHcoAA/vkCH1e8JF6XZ1q1ciCoDJ0pRVaepZJ5M4AZGKovXwpfOqGN7LXVjcEel7utt7KQiymbOsSc0iWFBSV8ZPlzITW7KmcOZQPnPTOcx/NOC9G9je7F2isZfF5j03SwWoQq8UN+Zi/TjoC5xmRF8rVHVZPiCb/z0eX+W3T3jyyb99Md7nkNYJubXv8r/Tlv3UgnS3bkAruGkQlltqavBwboFXgDEY9xfMi0Sf9YcjBZdrrOtPXMu9XeABswLAhXa5zG2Vys2HKdDtIVwOCS3PUZvyqe0EGczv/8D0RAu7NMVybl9YJMsY1ztU2nwOT4q2e99OUKUCzn2k34k14PdKTS/Yz32vM3ZtrUgVK2k9ukf4fSEER9ELJwhyNbHdPb07zijwY0u842A/fR03HgWR8LZaS7BtsOCCBXFwQNlfBzRTzlr9BflyGCOWp+dyRYIwlVYSMysv7TJwwSRqWackyPG/UapGwGstu5UpA2+3pXg34XuUOp4c6GydmSHw3SxRrcyFl8MfdCSrE94Sj8Ry4BKIvvDSsUHBDhJKuOeWSWNjWOX/TkjsLZyXv2zgfE62NG/hCkU9OHhRoHrFkzbaWdk1oAwZTN71Y5gei6ik/65p4imS0LiM8tRaPv8eDMqm5KBnGStb9FZxMPmtNrNRpJUXLdNMeanZ8YjvahyGf9X+9bZt8b7mM6zoaA/X0GXDXwvh+RzZIVTQAoQfhM7ylWIOUjZcTVSpC764t6F46VhzUpB9W8NgV03kFuA3sli1+zJ+99v40KMA3WvhO6tMz5dw7iSsiJWAiwkqNMmd0OdvkKI/TBHtFy3siBHTEhRAf3x1alaHh9dJxhFibwJa8dSkY9UeXcLtrz1ZhCYZa7ha5k2OQpsHLQkxZbDxZpBsusUGE9X/0WobJpf6tlEQIf6Z1Vq5VeYoK6UE2wOHHnHyMlB0GGwkpNM6zRtCeEvj/l7IeLE+jO/lAeDcYMAHseulIsnmsz5Ns2f/hKZWo2r3J1z282j/aSeBlpMMeTqTagEFpDw0Ss408tp+tpN974v/jloGWOps6OYxuFyhsiE5QgG69lPlqJy5aFuzzYEWoU+cntld35MWoT8IGSRn1MDuxAI8oHRLh6B1gl+YRXc+7YU5ygNoYG2nFF5S4TROcVzc9RNwdeTWzj9TRXKnCZYhih7CjPBmQ7zlx7/cYpSDBQIjXgpi6vDOMGOB/Uc399D8UVodYLknoAAA==",
    brandName: "Netflix",
    datePosted: "2 days ago",
    post: "Data Scientist",
    tag1: "Full-time",
    tag2: "Senior Level",
    payPerHour: 80,
    location: "Delhi, India"
  },
  {
    brandLogo: "data:image/webp;base64,UklGRuIIAABXRUJQVlA4INYIAACQNACdASrkAOoAPp1OoUwlpCciJPWpWOATiU3cLeQhmwOzEzQh9o/+R3sGtPMD5v/QHte/sv6fe4r9D+wNzivMB+1Xqz/4f1Sf3T1M/7x1MfoMdMR+6vpAZqZ/WO32vW7nfxDl2+l71NqIyMOUX9V9B70Wv8nyaIcMFR5CBkGQgYKjyEDIMhAwVHkIGQZCBgqPIQMgx6pGBqabTyEAioqtwzFRaauRvdbOKwv5fxr/3Saix4b7ydOMsyliS60umP3P5nwiQmDV+uJQI/nUBWtaToHOZl/yLhLR0SkN8hm4uAVSH2+2xgspCfOYmWG8Dl7xGOnU7myLceoN/ZTEiS88a1ghfZubIX/wzjoHTlfCcqzS3RatMgzOcw8VKecAhAoPrkBEgI8a+jNdUWemvvZj69sivKRZGALjFSWwW2BSEqgRuAieNwK82ucJPCxuH9O8EP5Rcsm+4Ytl4uF1v37RNrL7SEsKVZif0tKN1onLaftUc10IL9vcqCQTu/D8pqR12UJvEr1BhwyDOZMGuyDIQMFR5CBkGQgYKjyEDIMhAwVHkIGQZCBgqPIP7AAA/v6HqAAAABnnncjuerBE9N90CZT9t4CNzpWMzqmRY7KOcknoL3gp1VlJ/+DCJjOpH+///IfYZPtfC8QgTNg+LkW9yi93zSfKrz9dOFW5wlSFX2E40Zy/fykuEm3B6rqP4DHv5oRV3bUuNw9MpVw5ttUFymGenIcd7puIFBKFGdm5Z/FRPKvyNZ6EgU+g3brVx5aExIUnltB3vaAeUzfUW7hbkZhw7xE7O7Ly2SFY/kl8CUePmegVgbNxauYYamOySVbVuypR3nrFRgXGMtcZ0r/TFJlqf3xYWFpqJw8lKupKUTpEbb3BxBpQrlT5JkaxRXc0r/h3mlZdjX9UC1MoRNB8PRF/R32Oi3kUL6ayMGlUL65Vx7b1SxiApM4Ysy/el6YXCkLJ3CHe8jFVZsn9jV8L5/uzQ34Jjgm9Eiu/MXQSPvddRnHf1DstS/SeLWKj/2fPGJUWdbJT7JMwEzD9VdOQ0eEIkCuOsT1HPWj34bQq2p+TuQq8ZHIhlWnO6fsKwK1VAnwZ5qgfK9WNUXSNdXkBr0+7rGbhun76MUe7oI1oYCMCR858M/wcUuriWqIvn6nB7efimEbl7l8/0WFacRzKdy2FlNRe6fnEWmIZvlF0gYwLipt+v7fzcavI9Zdv98iPhVEE7Xjv/NyVBjblcg/ECynbUuTAyTNnApbjJq7NkY34KBmYmqGp8Ogo5IQVyu5cK/5y3c4G5rH0R3L3v7DVSjLLzMGgnTdB+tLZJGw2uRxjDf5fwHtRD45eiLcPYlqeo/P24bd4yRhBKIVnwqoKREC4OOt6TZtROGbZ5gj0HNn7MkAXfPneX/0p3zqTvI2n4an/Yzg6B1oyxCN/e0jTmQFZtiHVLDPH4P/vIkretb9LtrZNuknrTgM3WUYCjIHz1fBCj5iJlmqStRi9rM0XIJSDUUXr4OmjK8cRNA/pKiCJQ25I9pYy6DwMBmA8trF5HLAE0sm+yjtgpljq54MXko6Z3pNiCQrPYUXFeiNs+j5ye7i9a291GE6nHWbG3KoZMcjkiqqTG7MpxlHD5sSvBQHiXQzGpUgTYxpuR7aPZJk3gjkX4mIpuqLyX4PlBbQmZngu+Wh5cZZiGl7G5HfD7VUXXjXLSMYM8zwaeI5p/CpYg+2wV1wYBvAAxy5ZqnlU1YyTgIumAD1iTpEH/mk3H3bt108q5lef2BNFuM5f62enKeETsxcJUC57GYslkGtJXlCZ7f02HeQlDvPcn4B5zgfNyiIUj+YdcHmVYLCaDbF1GJX7QwoTSrPso9Y2fhuGwVe+YlI5SicxFRxjqRr7g/OLnllWY4+PLaLbmSrnlZgrNFdQMpNoesy6w9Rb4pip+L795ycVn5KBuosUCeUfC04Y8ScmzwTQlRZutxM7HSV3a/D/WxzzJNSpX46aKnP4ydAw1neL600RqjcG6KEeu67zLa3yOwmUhLsPU0tFGAaP4FsmuSsn2WL6Dadbv9L8yBH56SWAnRFSyf/H/AEkdkdEnEdD8ZYQfgT51biHMhSpy0vHDnp8+pGx8iP5fmXQ4T2dOhB6SQBsQnlmZt818fd4BY5tBKUCUnf5OTh/VSt5+zo1ESXNURQhZ1V9x+RfUsqy8+PpIyV1uRX8Og6PcS5FnsGatoPhpM3x9cPNQ5YuhKbeWnboOailZl2phtdnVO2BpE4Phv+rXgKKyF+Hou96rfssIFBy3Fxzqf+SipW9uKtBcH2z+gU4Lv9Lvh2bY1zZbDM94dQMNy1TWFPI/7NMZRIL9fOz7KTI1dU4auM60aPWVgNWnzgc7Z+7jcxMJlGzPiuNW5FnaBvtILBhVILJKMK6L8UCZzFrMQXyw5910iGjvrUCLVxWeeRU+UMonOTdLtQcwgLCUgMUU5+mJWYDSjQDVasDldHuEmMJKJLy9Qp4U4/ntpyAMupThRfxdzU915/0WensxpEc6PIgRU6nD5bKPbgV6eiMaNc4q5KTxHws3rna8k8r386HzAydV/5PuCPXu1cR4BGtl1BVog60cRRWhtzBnIgLmewbXQrKmktw8s5cNpJ/PluXwu1yNs6RyvpIOfYQveVNqleGWkpHDYK7SO3YF+GkHPchSO4jEmN7y9JgZEoiN6hI10BSEHGu6AuMHQQiqvzFIJWbseWik3g3ap8RcZFq3hmvuhbYK0/U5eCyW0VAOQL+ED9fRrFhBltq1YS0IviMg2jSKh/GbZAxfg+PgyfJuyZ+5t1UbK93K8TF/pUfkFZCzU6vfva8Zodk1DQBfbwUBt9d5oAEIBT9fzWIJf+dCRLFAvr/qoVZULd75QCqWeREvlGDKx6fraxvvsnwc6LVscdhhrxgFb1MQ01YSqkW20KT5blxLzYsJFlU5asRE03LdJsr+pOCOu/ral8LWONG5Xs8kqsRoIjF0VGfyzMpReM5SZGUFt3NhJWXtNIOuLgAAAAAAAAAAAA=",
    brandName: "Infosys",
    datePosted: "5 days ago",
    post: "System Administrator",
    tag1: "Full-time",
    tag2: "Junior Level",
    payPerHour: 25,
    location: "Kolkata, India"
  },
  {
    brandLogo: "data:image/webp;base64,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",
    brandName: "Tesla",
    datePosted: "3 days ago",
    post: "Automation Engineer",
    tag1: "Part-time",
    tag2: "Mid Level",
    payPerHour: 50,
    location: "Mumbai, India"
  }
];

  return (
   <div className='parent'>
    {jobOpenings.map(function(elem,index){
      // idx 
      return <div key={index}>
        <Card 
      key = {index}
      company={elem.brandName} 
      post = {elem.post}
      tag1 = {elem.tag1}
      tag2 = {elem.tag2}
      payPerHour = {elem.payPerHour}
      brandLogo = {elem.brandLogo}
      datePosted = {elem.datePosted}
      location = {elem.location}

      />
      </div> 
    })}
    {/* {jobOpenings.map((elem) =>(
    <Card key={index} data={job}/>
  ))} */}
    </div>
  )
}

export default App
