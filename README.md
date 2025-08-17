# 🌦️ Weather App – DevOps Project

---

## 1. Project Setup
- Tech Stack: **HTML, CSS, JavaScript**  
- Created a static weather application.

---

## 2. Containerization with Docker
- Wrote a **Dockerfile** to containerize the application.

---

## 3. CI/CD with Jenkins
Configured a **Jenkinsfile** to automate build and deployment:  
- Clone Repo  
- Build Docker Image  
  ```bash
  docker build -t drashyamalot/weather-app:latest .

---

## 4.Build jenkinsfile

## 5.Kubernetes on AWS EKS
```bash
Created Kubernetes cluster using eksctl:

eksctl create cluster --name mycluster

Created Deployment with the pushed Docker image:

kubectl create deployment weatherapp --image=drashyamalot/weather-app:latest
```

Exposed Deployment via LoadBalancer:
```
kubectl expose deployment weatherapp --type loadbalancer --port 80
```
---

## 6.Autoscaling
```kubectl autoscale deployment weartherapp --cpu-percent=50 --max=10 --min=1```
```kubectl get hpa ```



## Note:

If using k8s manifest file use:
```bash
kubectl apply -f FileName.yml
kubectl apply -f deployment.yml
kubectl apply -f service.yml
kubectl apply -f hpa.yml
```

## 7. Project Flow Diagram
GitHub Repo → Jenkins → Docker Hub → AWS EKS (K8s Deployment) → LoadBalancer (Service) → Autoscaling (HPA)
