<#
Setup script for Windows developers working on the frontend.
Run from PowerShell (preferably as Administrator if global installs are required):
  cd frontend
  .\setup-windows.ps1

What it does:
- Verifies Node & npm
- Installs `pnpm` (optional)
- Installs project dependencies using `npm ci` (uses package-lock.json)
- Optionally installs recommended VS Code extensions (if `code` CLI present)
#>

function Write-Ok($msg){ Write-Host "[OK]  $msg" -ForegroundColor Green }
function Write-Err($msg){ Write-Host "[ERR] $msg" -ForegroundColor Red }

Write-Host "Running frontend setup script..."

# ensure script runs from its directory
Set-Location -Path (Split-Path -Path $MyInvocation.MyCommand.Definition -Parent)

# Check Node
$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
  exit 1
}
else {
  $nv = (& node -v)
  Write-Ok "Node detected: $nv"
}

# Check npm
$npm = Get-Command npm -ErrorAction SilentlyContinue
if (-not $npm) {
  Write-Err "npm not found. It should come with Node."
  exit 1
}
else {
  $npmv = (& npm -v)
  Write-Ok "npm detected: $npmv"
}

# Install pnpm (optional) if not present
$pnpmCmd = Get-Command pnpm -ErrorAction SilentlyContinue
if (-not $pnpmCmd) {
  Write-Host "pnpm not found. Installing pnpm globally (may require admin rights)..."
  try {
    Write-Ok "pnpm installed"
  } catch {
  }
} else { Write-Ok "pnpm already installed" }

# Install dependencies using package-lock if present
if (Test-Path package-lock.json) {
  Write-Host "Installing exact dependencies from package-lock.json (npm ci)..."
  & npm ci
} else {
}

if ($LASTEXITCODE -ne 0) {
  Write-Err "Dependency installation failed. See errors above."
  exit $LASTEXITCODE
} else { Write-Ok "Dependencies installed" }

# Install recommended VS Code extensions if code is available
$codeCmd = Get-Command code -ErrorAction SilentlyContinue
if ($codeCmd) {
  Write-Host "Installing recommended VS Code extensions..."
  $extensions = @(
    'bradlc.vscode-tailwindcss',
    'dbaeumer.vscode-eslint',
    'esbenp.prettier-vscode',
    'eamodio.gitlens',
    'ms-azuretools.vscode-docker',
    'AmazonWebServices.aws-toolkit-vscode',
    'ms-ossdata.vscode-postgresql',
    'dsznajder.es7-react-js-snippets'
  )
  foreach ($ext in $extensions) {
    Write-Host "Installing $ext"
  }
  Write-Ok "VS Code extensions installed"
} else {
}

Write-Ok "Setup complete. Start dev server with: npm run dev"
