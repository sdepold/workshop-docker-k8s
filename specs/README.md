# Setup

1. Spawn GKE cluster
2. Authenticate

```
gcloud auth login
gcloud auth configure-docker
```

3. Configure the new cluster locally

```
gcloud container clusters list
gcloud container clusters get-credentials autopilot-cluster-1 --zone us-central1
kubectl config current-context
```

4. Apply the kube spec

```
kubectl create -f ./google-cloud.yml
``` 
