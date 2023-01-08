# website-movit.ch

#### Relaunch Website

Design:

`https://www.figma.com/file/3IkqNUDp3KmLbFAM8JfudM/MovIT-Website-Relaunch?node-id=0%3A1&t=0CGVxbdO7CACJgnn-1`

- We are using bootstrap / https://react-bootstrap.github.io/

Code: 

`Next.js`

Notes:

- group images by section

---

Getting started:

`yarn install`

Run code:

```bash
npm run dev
# or
yarn dev
```


--- 
Docker

Setup a local domain entry

- Ubuntu and Macos:
  https://www.codegrepper.com/code-examples/shell/set+domain+name+for+localhost+ubuntu
- Windows:
  https://ecompile.io/blog/localhost-custom-domain-name
  C:\Windows\System32\drivers\etc
```  
127.0.0.1	movit.local
```

```  
docker-compose up -d
```