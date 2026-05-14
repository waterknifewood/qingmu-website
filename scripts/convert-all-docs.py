import sys

files = [
    (r'C:\Users\water\qingmu-website\src\data\year-summary.txt', 'yearSummary'),
    (r'C:\Users\water\qingmu-website\src\data\debut-postscript.txt', 'debutPostscript'),
    (r'C:\Users\water\qingmu-website\src\data\misc-thoughts.txt', 'miscThoughts'),
    (r'C:\Users\water\qingmu-website\src\data\interview-bio.txt', 'interviewBio'),
]

for src_path, var_name in files:
    with open(src_path, 'r', encoding='utf-8') as f:
        content = f.read()
    paragraphs = [p.strip() for p in content.split('\n\n') if p.strip()]

    with open(r'C:\Users\water\qingmu-website\src\data\records.py', 'a', encoding='utf-8') as f:
        f.write(f'\n{var_name} = [\n')
        for p in paragraphs:
            escaped = p.replace('\\', '\\\\').replace("'", "\\'")
            f.write(f"  '{escaped}',\n")
        f.write(']\n')

    print(f'{var_name}: {len(paragraphs)} paragraphs')
