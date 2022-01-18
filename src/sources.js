const sources = [
  {
    label: '720p',
    src: 'https://aspb31.cdn.asset.aparat.com/aparat-video/01818e7337558a20bafe2b5f033bdca538564648-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImZkODAwNTcyNWZjYzRkNDNlNWFiYjFjMzk3MjQ4ZmFkIiwiZXhwIjoxNjQwODc3MjY2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.NzoqhCmx938qYuPdHDtVLL4gu-O3yXmEMxJ7asERg9Q',
    type: 'video/mp4',
  },
  {
    label: '480p',
    src: 'https://aspb31.cdn.asset.aparat.com/aparat-video/01818e7337558a20bafe2b5f033bdca538564648-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImZkODAwNTcyNWZjYzRkNDNlNWFiYjFjMzk3MjQ4ZmFkIiwiZXhwIjoxNjQwODc3MjY2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.NzoqhCmx938qYuPdHDtVLL4gu-O3yXmEMxJ7asERg9Q',
    type: 'video/mp4',
  },
  {
    label: '360p',
    src: 'https://aspb31.cdn.asset.aparat.com/aparat-video/01818e7337558a20bafe2b5f033bdca538564648-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImZmNTIzMzRjNmYxODJiNzRlMmU4OTJlMmM1MGQ1MTdhIiwiZXhwIjoxNjQwODc3NjYwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.EuIWvxsKJe0EzP8bY0rgz09NV8wHsW-m5R86gdHbCGo',
    type: 'video/mp4',
    selected: true,
  },
  {
    label: '240p',
    src: 'https://aspb31.cdn.asset.aparat.com/aparat-video/01818e7337558a20bafe2b5f033bdca538564648-240p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImZmNTIzMzRjNmYxODJiNzRlMmU4OTJlMmM1MGQ1MTdhIiwiZXhwIjoxNjQwODc3NjYwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.EuIWvxsKJe0EzP8bY0rgz09NV8wHsW-m5R86gdHbCGo',
    type: 'video/mp4'
  },
  {
    label: '144p',
    src: 'https://aspb31.cdn.asset.aparat.com/aparat-video/01818e7337558a20bafe2b5f033bdca538564648-144p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImZmNTIzMzRjNmYxODJiNzRlMmU4OTJlMmM1MGQ1MTdhIiwiZXhwIjoxNjQwODc3NjYwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.EuIWvxsKJe0EzP8bY0rgz09NV8wHsW-m5R86gdHbCGo',
    type: 'video/mp4'
  }
]

export default sources;

export const foreignSources = [
  {
    label: 'youtube1',
    cover: 'https://yttbn1-cdn.zarebin.ir/RhWwYErW7PUyWL5gB0MkvQ/4764998504/vi/gWulDict1ko/hqdefault.jpg?zb_src=i.ytimg.com&zb_dmn=i.ytimg.com&zb_scm=https',
    format: 'video/mp4; codecs=\'avc1.42001E, mp4a.40.2\'',
    src: "https://dls.music-fa.com/tagdl/99/Mehraj%20-%20Talkh%20(128).mp3",
    type: 'video/mp4',
  },
  {
    label: 'insta1',
    cover: 'https://mmd-prod-rgw.kp0.mci.dev/smcigpr/2021/12/26/2737369836299864431/640x995.jpg',
    format: 'mp4',
    src: 'https://inst1-cdn.zarebin.ir/smcigpr/2021/12/26/2737369836299864431.mp4?zb_src=mmd-prod-rgw.kp0.mci.dev&zb_dmn=mmd-prod-rgw.kp0.mci.dev&zb_scm=https',
    type: 'video/mp4'
  },
  {
    label: 'insta2',
    format: 'mp4',
    src: 'https://inst1-cdn.zarebin.ir/smcigpr/2021/12/26/2737369836299864431.mp4?zb_src=mmd-prod-rgw.kp0.mci.dev&zb_dmn=mmd-prod-rgw.kp0.mci.dev&zb_scm=https',
    type: 'video/mp4'
  },
  {
    label: 'youtube2',
    cover: 'https://yttbn1-cdn.zarebin.ir/fJ1LV4gCwU8RdL1fHLgzFg/4764998504/vi/ZYAIr6C__Cs/maxresdefault.jpg?zb_src=i.ytimg.com&zb_dmn=i.ytimg.com&zb_scm=https',
    format: 'video/mp4',
    src: 'https://ytb1-cdn.zarebin.ir/VKcFi41NeydiWEHnyiuI3g/4764998504/videoplayback?expire=1640880506&ei=GoXNYe-QLdLQxwK8i6CYCg&ip=89.45.49.104&id=o-AN5dO_4vAUocyVqlWJune3bpFC8aQJITHvI_zeKB1VzQ&itag=18&source=youtube&requiressl=yes&mh=22&mm=31%2C29&mn=sn-vh5ouxa-hju6%2Csn-hju7enel&ms=au%2Crdu&mv=m&mvi=4&pl=24&initcwndbps=447500&vprv=1&mime=video%2Fmp4&ns=TUh7Jkz9QwU8QjhHn-T9sqgG&gir=yes&clen=9489940&ratebypass=yes&dur=448.632&lmt=1633626491624683&mt=1640858458&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=6310222&n=-GSg_A9euvgQzdeA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAKlKp9TLtBf1qwoDKJ-B-OQjloMEwI1875kwBPFLHxPcAiEAy7Bd_1fCOFKXMv3qeuG5mcayZ2QzJkkXWZIa7MDpYto%3D&sig=AOq0QJ8wRAIgI_YScWqB7VJwt-TKtr4HvwKjpFDI6cM2Ixfi4WTGGPsCIB7PpoSum0jESiemWGpemnWXHNal16zhCYgtctEd0cf8&code=ZYAIr6C__Cs&pid=1089&zb_src=rr4---sn-vh5ouxa-hju6.googlevideo.com&zb_dmn=rr4---sn-vh5ouxa-hju6.googlevideo.com&zb_scm=https',
    type: 'video/mp4'
  },
]

