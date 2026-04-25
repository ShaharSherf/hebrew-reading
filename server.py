#!/usr/bin/env python3
import http.server, urllib.request, urllib.parse, os, sys

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith('/tts?'):
            params = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            text = params.get('q', [''])[0]
            if not text:
                self.send_error(400); return
            url = f'https://translate.google.com/translate_tts?ie=UTF-8&q={urllib.parse.quote(text)}&tl=he&client=tw-ob'
            try:
                req = urllib.request.Request(url, headers={
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                    'Referer': 'https://translate.google.com/',
                    'Accept': '*/*',
                })
                with urllib.request.urlopen(req, timeout=10) as r:
                    data = r.read()
                self.send_response(200)
                self.send_header('Content-Type', 'audio/mpeg')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Content-Length', str(len(data)))
                self.end_headers()
                self.wfile.write(data)
            except Exception as e:
                print(f'TTS error: {e}', file=sys.stderr)
                self.send_error(502)
        else:
            super().do_GET()

    def log_message(self, fmt, *args):
        pass

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
os.chdir(os.path.dirname(os.path.abspath(__file__)))
print(f'Serving at http://localhost:{port}')
http.server.HTTPServer(('localhost', port), Handler).serve_forever()
