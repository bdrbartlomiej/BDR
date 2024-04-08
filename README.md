# Testy PlayWright

Uruchomienie wszystkich testów:

```bash
npx playwright test
```

Uruchomienie testów z określonego katalogu:

```bash
npx playwright test tests/*
```

Uruchomienie testów z określoną nazwą:

```bash
npx playwright test -g 'get started link'
```

Uruchomienie 10 testów na raz:

```bash
npx playwright test --workers 10
```

Uruchomienie testów z określonego projektu:

```bash
npx playwright test --project=chromium
```

Uruchomienie testu w trybie headed:
```bash
npx playwright test -g 'get started link' --project=chromium --headed
```

Uruchomienie testu w trybie debug:
```bash
npx playwright test -g 'get started link' --project=chromium --debug
```

Uruchomienie testów z wykorzystaniem ui:

```bash
npx playwright test --ui
```

Uruchomienie generatora testów:

```bash
npx playwright codegen
```

Uruchomienie ostatniego raportu:

```bash
npx playwright show-report
```
