autocmd Filetype javascript setlocal ts=4 sts=4 sw=4

let $ACK_OPTIONS .= ' --ignore-dir=log'
let $ACK_OPTIONS .= ' --ignore-dir=tmp'
let $ACK_OPTIONS .= ' --ignore-dir=doc'
let $ACK_OPTIONS .= ' --ignore-dir=db/fixtures'
let $ACK_OPTIONS .= ' --ignore-dir=db/transaction_templates'
let $ACK_OPTIONS .= ' --ignore-dir=test'
let $ACK_OPTIONS .= ' --ignore-dir=script'
let $ACK_OPTIONS .= ' --ignore-dir=public '
